
import React from 'react';
import DataService from '../services/data/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';



import Parts from './Parts';
import Part from './Part';
import Header from './Header';
import Footer from './Footer';


class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
				context: {
					services: {
						data: new DataService(props.configuration)
					}
					, configuration: props.configuration
				}
				,parts: {
					objs: []
					, pages: {}
				}
		};
	}
	
	render(){
		console.log('[App|render|in]', this.state);
		const state = this.state;
		console.log('[App|render|out]');
		return (
            <section className="container-fluid">
				<Header state={state} />
					<section className="container">
					<Switch>
						<Route path='/' render={ (props) => <Parts {...props} state={state}  /> } />
						<Route path='/parts/:id' render={(props) => <Part {...props} state={state}  />} />
					</Switch>
					</section>
				<Footer state={state} />
			</section>

			)
	}
};

App.propTypes = {
	configuration: PropTypes.object.isRequired
}

App.defaultProps = {
}

export default App;


