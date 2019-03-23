import DataStoreFactory from '../store/DataStoreFactory';

class DataService {

	constructor(config) {
        this.store = new DataStoreFactory(config.dataStore).get();
	}

	getParts(stage, fromKey, pageSize, callback) {
		console.log('[DataService|getParts|in](', stage, ',', fromKey,',', pageSize,')');
		console.log('[DataService|getParts|out]');
        return this.store.getPagedObjs(stage, 'parts', fromKey, pageSize, callback);
    };
    
    getPart(stage, key, callback) {
		console.log('[DataService|getPart|in] (', stage, ',', key, ')');
		console.log('[DataService|getPart|out]');
        return this.store.getObj(stage, 'parts', key, callback);
    };

};

export default DataService;