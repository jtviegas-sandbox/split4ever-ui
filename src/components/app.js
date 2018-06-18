
import React from 'react';
import datastore from '../services/datastore';

class App extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.properties)
			throw '!!! no properties attribute being provided !!!';

		this.store = new datastore(props.properties);
		this.state = {
			parts: null
		}
	}
	
	componentWillMount() {
		console.log('[App.componentWillMount]');
		this.store.getParts((e,os) => {
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