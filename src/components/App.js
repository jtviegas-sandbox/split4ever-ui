
import React from 'react';
import DataService from '../services/data/index';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


import Main from './Main';
import Part from './Part';
import Header from './Header';
import Footer from './Footer';


class App extends React.Component {
	
	constructor(props){
		super(props)
		

		this.state = {
			 data: {
				parts: []
			}
			, selection: {
				user: 0
				, part: null
			}
			, configuration: props.configuration
			, services: {
				data: new DataService(props.configuration)
			}

		}
	}

	
	render(){

		const { configuration, data, selection, services } = this.state
		
		return (
            <section className="container-fluid">
				<Header selection={selection} configuration={configuration} />
					<section className="container">
				
					<Switch>
						<Route exact path='/' render={(props) => <Main {...props} data={data} configuration={configuration} selection={selection} services={services} />} />
						<Route path='/parts/:id' render={(props) => <Part {...props} data={data} configuration={configuration} selection={selection} services={services} />} />
					</Switch>

					</section>
				<Footer data={data} configuration={configuration} selection={selection} />
			</section>

			)
	}
};

App.propTypes = {
	configuration: PropTypes.object.isRequired
	, services: PropTypes.object
	, data: PropTypes.object
	, selection: PropTypes.object

}

App.defaultProps = {

}

export default App;


