import DataStoreFactory from '../store/DataStoreFactory';

class DataService {

	constructor(config) {
        this.store = new DataStoreFactory(config.datastore).get();
	}

	getParts(page, pageSize, cb) {
		console.log('[DataService|getParts|in]');
		console.log('[DataService|getParts|out]');
        return this.store.getPagedObjs('part', page, pageSize, cb);
    };
    
    getPart(id, cb) {
		console.log('[DataService|getPart|in] id:', id);
		console.log('[DataService|getPart|out]');
        return this.store.getObj('part', id, cb);
    };

};

export default DataService;