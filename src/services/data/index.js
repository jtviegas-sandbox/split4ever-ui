import DataStoreFactory from '../store/DataStoreFactory';

class DataService {

	constructor(config) {
        this.store = new DataStoreFactory(config.datastore).get();
	}

	getParts(page, pageSize, cb) {
        return this.store.getPagedObjs('part', page, pageSize, cb);
    };

};

export default DataService;