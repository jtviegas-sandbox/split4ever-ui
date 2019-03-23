import DataStoreFactory from '../store/DataStoreFactory';

class DataService {

	constructor(config) {
        this.store = new DataStoreFactory(config.datastore).get();
	}

	getParts(mode, lastKey, pageSize, cb) {
		console.log('[DataService|getParts|in](', mode, ',', lastKey,',', pageSize,')');
		console.log('[DataService|getParts|out]');
        return this.store.getPagedObjs(mode, 'parts', lastKey, pageSize, cb);
    };
    
    getPart(mode, key, cb) {
		console.log('[DataService|getPart|in] (', mode, ',', key, ')');
		console.log('[DataService|getPart|out]');
        return this.store.getObj(mode, 'parts', key, cb);
    };

};

export default DataService;