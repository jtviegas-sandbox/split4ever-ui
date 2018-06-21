import DataStoreFactory from '../store/DataStoreFactory';

class DataService {

	constructor(config) {
        this.store = new DataStoreFactory(config.datastore).get();
	}

	getParts(cb) {
        return this.store.getObjs('part', cb);
    };
    


};

export default DataService;