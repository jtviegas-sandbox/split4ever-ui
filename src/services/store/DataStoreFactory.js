import MockDataStore from './mock/index.js';
class DataStoreFactory {

	constructor(props) {
        this.config = props;
        if(this.config.mode === 'mock'){
        this.store = new MockDataStore(this.config)
        }
	}

	get() {
        return this.store;
	};

}
;

export default DataStoreFactory;