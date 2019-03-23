import uuid from 'uuid';
import store from './data.js';

class MockDataStore {


    constructor(props) {
    	if( !props.defaultPageSize )
    		throw new Error('!!! no defaultPageSize configuration !!!');
    	this.config = props;
        this.data = store;

    }

    // data file format: 'id', 'number', 'name', 'price', 'family', 'category', 'subcategory', 'notes'
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
            console.log('found with id:', id, 'the obj array:', s);
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

    getObj(stage, type, id, cb){
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
    	this.getPagedObjs(type, null, null, cb);
    }
    
    getPagedObjs(stage, type, fromKey, pageSize, callback){
    	console.log('[MockDataStore|getPagedObjs|in]');
		
        try {
        	let r = {
        		data: []
        		, first: null
                , previous: null
                , next: null
                , last: null
                , idx: {
        		    current: 0
                    , first: 0
                    , previous: null
                    , next: null
                    , last: null
                }
        	}
        	let _data = this.data[type];
        	
        	if(0 < _data.length) {

                r.idx.last = _data.length - 1;
                console.log('[MockDataStore|getPagedObjs] last index:', r.idx.last);

                if (!pageSize)
                    pageSize = this.config.defaultPageSize;

                if (fromKey) {
                    r.idx.current = _data.findIndex(o => o.id === fromKey);
                    if (-1 === r.idx.current)
                        throw new Error("could not find data by lastKey");
                    r.idx.current++;
                }

                let n = _data.length;
                let pages = Math.ceil(n / pageSize);
                let page = Math.floor(r.idx.current/pageSize)

                if(1 < page)
                    r.idx.previous = (page-1)*pageSize;
                if( page < (pages-2) )
                    r.idx.next = (page+1)*pageSize;

                r.idx.last = (pages-1)*pageSize;

                if (r.idx.next) {
                    console.log('[MockDataStore|getPagedObjs] slicing', r.idx.current, r.idx.next);
                    r.data = _data.slice(r.idx.current, r.idx.next);
                } else {
                    if( page < (pages-1)){
                        console.log('[MockDataStore|getPagedObjs] slicing', r.idx.current, r.idx.current+pageSize);
                        r.data = _data.slice(r.idx.current, r.idx.current+pageSize);
                    }
                    else{
                        console.log('[MockDataStore|getPagedObjs] slicing', r.idx.current);
                        r.data = _data.slice(r.idx.current);
                    }
                }

                r.previous = (null === r.idx.previous) ? null : _data[r.idx.previous-1].id;
                r.next = (null === r.idx.next) ? null : _data[r.idx.next-1].id;
                r.last = (0 < r.idx.last) ? _data[r.idx.last-1].id : null ;

                console.log('[MockDataStore|getPagedObjs] pointers', r.idx.first,r.idx.previous,r.idx.current, r.idx.next, r.idx.last);

        	}
        	
            callback(null, r);
         }
        catch(error){
            callback(error);
        }
        console.log('[MockDataStore|getPagedObjs|out]');
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


