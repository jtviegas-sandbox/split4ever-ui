import axios from 'axios';

class datastore {


	constructor(props) {

        this.defaultCount = props.pagination.n || 20;
        this.url = props.api.url;
	}

	getParts(callback, start, count) {
        let _start = start || 0;
        let _count = count || this.defaultCount;
        axios.get(this.url + `/parts?start=${_start}&count=${_count}`)
            .then(response => callback(response))
	};

}
;

export default datastore;