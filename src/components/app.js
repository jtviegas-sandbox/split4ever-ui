
import React from 'react';
import DataStoreFactory from '../services/store/DataStoreFactory';

class App extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.configuration)
			throw new Error('!!! no configuration attribute being provided !!!');

		let dsf = new DataStoreFactory(props.configuration.datastore)
		this.store = dsf.get();
		this.state = {
			parts: null
		}
	}
	
	componentWillMount() {
		console.log('[App.componentWillMount]');
		this.store.getObjs((e,os) => {
			if(e)
				console.log('challenges getting parts', e);
			else{
                console.log('got a set of parts: ', os.length)
				this.setState({parts: os});
			}
		});
	}
	
	render(){
		return (
            <div className="app"></div>
			)
	}
};


export default App;