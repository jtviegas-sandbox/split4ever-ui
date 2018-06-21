import uuid from 'uuid';
import store from './data.js';

class MockDataStore {


    constructor(props) {
        this.config = props;
        this.data = store;
    }

    // data file format: 'id', number', 'name', 'price', 'category', 'subcategory', 'notes' 
    getObjIndex(type, obj){
        let r = -1
        if( obj.id ){
            let s = this.data[type].filter(e => obj.id === e.id)
            if(1 === s.length)
                r = this.data[type].indexOf(s[0]);
        }
        return r;
    }

    getIdIndex(type, id){
        let r = -1
        if( id ){
            let s = this.data[type].filter(e => id === e.id)
            if(1 === s.length)
                r = this.data[type].indexOf(s[0]);
        }
        return r;
    }

    syncSetObj(type, o){
        let idx = this.getObjIndex(type, o);
        if( idx > -1 )
            this.data[type][idx] = o;
        else{
            if( !o.id )
                o.id = uuid();
            this.data[type].push(o);
        }
    }

    setObj(type, o, cb){
        try{
            this.syncSetObj(type, o);
            cb(null, o);
        }
        catch(error){
            cb(error);
        }
        
    }

    getObj(type, id, cb){
        try{
            let r = null;
            let idx = this.getIdIndex(type, id);
            if( idx > -1 )
                r = this.data[type][idx];
            cb(null, r);
         }
        catch(error){
            cb(error);
        }
    }

    getObjs(type, cb){
        try{
            cb(null, [...this.data[type]]);
         }
        catch(error){
            cb(error);
        }
    }

    removeObj(type, id, cb){
        try {
            let r = null;
            let idx = this.getIdIndex(type, id);
            if( idx > -1 )
                r = this.data[type].splice(idx,1);
            cb(null, r);
         }
        catch(error){
            cb(error);
        }
    }

    setObjs(type, os, cb){
        try {
            os.forEach(function(o) {
                this.syncSetObj(type, o);
            }); 
            cb(null, [...this.data[type]]);
         }
        catch(error){
            cb(error);
        }
    }

    clear(type, cb){
        try {
            let o = this.data[type].splice(0);
            cb(null, o);
         }
        catch(error){
            cb(error);
        }
    }


};

export default MockDataStore;


