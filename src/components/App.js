
import React from 'react';
import DataService from '../services/data/index';
import Main from './Main';

class App extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.configuration)
			throw new Error('!!! no configuration attribute being provided !!!');
		
		this.state = {
			parts: []
			, configuration: props.configuration
		}

		this.dataService = new DataService(this.state.configuration);
	}
	
	componentWillMount() {

		this.dataService.getParts((e,os) => {
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

            <section className="container-fluid">
				<Main state={this.state} />
			</section>

			)
	}
};


export default App;