import uuid from 'uuid';
import store from './data.js';

class MockDataStore {


    constructor(props) {
        this.config = props;
        this.data = store;
    }

    // data file format: 'id', number', 'name', 'price', 'category', 'subcategory', 'notes' 
    getObjIndex(obj){
        let r = -1
        if( obj.id ){
            let s = this.data.filter(e => obj.id === e.id)
            if(1 === s.length)
                r = this.data.indexOf(s[0]);
        }
        return r;
    }

    getIdIndex(id){
        let r = -1
        if( id ){
            let s = this.data.filter(e => id === e.id)
            if(1 === s.length)
                r = this.data.indexOf(s[0]);
        }
        return r;
    }

    syncSetObj(o){
        let idx = this.getObjIndex(o);
        if( idx > -1 )
            this.data[idx] = o;
        else{
            if( !o.id )
                o.id = uuid();
            this.data.push(o);
        }
    }

    setObj(o, cb){
        try{
            this.syncSetObj(o);
            cb(null, o);
        }
        catch(error){
            cb(error);
        }
        
    }

    getObj(id, cb){
        try{
            let r = null;
            let idx = this.getIdIndex(id);
            if( idx > -1 )
                r = this.data[idx];
            cb(null, r);
         }
        catch(error){
            cb(error);
        }
    }

    getObjs(cb){
        try{
            cb(null, [...this.data]);
         }
        catch(error){
            cb(error);
        }
    }

    removeObj(id, cb){
        try {
            let r = null;
            let idx = this.getIdIndex(id);
            if( idx > -1 )
                r = this.data.splice(idx,1);
            cb(null, r);
         }
        catch(error){
            cb(error);
        }
    }

    setObjs(os, cb){
        try {
            os.forEach(function(o) {
                this.syncSetObj(o);
            }); 
            cb(null, [...this.data]);
         }
        catch(error){
            cb(error);
        }
    }

    clear(cb){
        try {
            let o = this.data.splice(0);
            cb(null, o);
         }
        catch(error){
            cb(error);
        }
    }


};

export default MockDataStore;


