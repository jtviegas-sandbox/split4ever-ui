
import React from 'react';
import DataService from '../services/data/index';
import { HashRouter, Route } from 'react-router-dom';

import Main from './Main';
import Part from './Part';
import Header from './Header';
import Footer from './Footer';

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
				<Header state={this.state} />
				<HashRouter>
					<section className="container">
						<Route exact path='/' render={(props) => <Main {...props} {...this.state} />} />
						<Route path='/parts/:id' render={(props) => <Part {...props} {...this.state} />} />
					</section>
				</HashRouter>
				<Footer state={this.state} />
			</section>

			)
	}
};


export default App;
//https://getbootstrap.com/docs/4.1/examples/album/#


