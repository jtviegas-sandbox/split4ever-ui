
import React from 'react';
import datastore from '../services/datastore';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.store = new datastore(props);
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
            <ErrorBoundary>
            <div className="app"></div>
            </ErrorBoundary>
			)
	}
};


export default App;