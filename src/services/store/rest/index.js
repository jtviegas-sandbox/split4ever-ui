import axios from 'axios';

class RestDataStore {


	constructor(props) {
        if( !props.defaultPageSize )
            throw new Error('!!! no defaultPageSize configuration !!!');
        this.url = props.url;
	}

    getPagedObjs(mode, type, lastKey, pageSize, callback) {
        console.log('[RestDataStore|getPagedObjs|in](mode:', mode, ',type:', type, ',lastKey:', lastKey,', pageSize:', pageSize,')');

        if(!type){
            console.error('[RestDataStore|getPagedObjs] no type provided');
            throw "no type provided";
        }

        let _url = this.url + '/' + type;
        let _query = null;
        if(lastKey)
            _query = _query ? _query+=`&lastkey=${lastKey}` : `?lastkey=${lastKey}`;
        if(pageSize)
            _query = _query ? _query+=`&pagesize=${pageSize}` : `?pagesize=${pageSize}`;
        if(mode)
            _query = _query ? _query+=`&${mode}=true` : `?${mode}=true`;

        if(_query)
            _url += _query;

        axios.get(_url).then(response => callback(response));

        console.log('[RestDataStore|getPagedObjs|out]');
    }

	getObj(mode, type, key, callback) {
        console.log('[RestDataStore|getObj|in](mode:', mode, ',type:', type, ',key:', key,')');

        if(!type){
            console.error('[RestDataStore|getObj] no type provided');
            throw "no type provided";
        }
        if(!key){
            console.error('[RestDataStore|getObj] no key provided');
            throw "no key provided";
        }

        let _url = this.url + '/' + type + '/' + key;
        if(mode)
            _url += `?${mode}=true`;

        axios.get(_url).then(response => callback(response));

        console.log('[RestDataStore|getObj|out]');
	};

}
;

export default RestDataStore;