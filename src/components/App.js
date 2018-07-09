
import React from 'react';
import DataService from '../services/data/index';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';



import Parts from './Parts';
import Part from './Part';
import Header from './Header';
import Footer from './Footer';


class App extends React.Component {
	
	constructor(props){
		super(props)
		
		this.configuration = props.configuration;
		this.services = {
				data: new DataService(props.configuration)
			}
		this.state = {
			 
				parts: {
					objs: []
					, pages: {}
				}
				, page: null
			
		}

		
/* 		this.pageRequest = function(ref){
			
			var f = function(page){
				console.log('[App|pageRequest|f|in]');
				ref.services.data.getParts(page, ref.configuration.pagination.n, (e,r) =>{
					console.log('[App|pageRequestCallback|f|in]');
					if(e){
						console.log('[App|pageRequestCallback|f] challenges getting parts', e);	
					}
					else{
						console.log('[App|pageRequestCallback|f] got a set of parts: ', r.objs);
						let p = ref.state.data;
						p.parts = r;
						ref.setState({data: p});
					}
					console.log('[App|pageRequestCallback|f|out]');
				});
				
				console.log('[App|pageRequest|f|out]');
			};
			return {f:f}
		}(this); */
		
		
	}

	componentWillReceiveProps(nextProps){
		console.log('[App|componentWillReceiveProps|in] nextProps:', nextProps);
	}

 	componentWillMount(){
		console.log('[App|componentWillMount|in]', this.props);
		let page = 0;
/* 		console.log('[App|componentWillMount] this.props.location: ', this.props.location)
		if(this.props.location)
			page = Functions.queryString2Page(this.props.location.search);
		console.log('[App|componentWillMount] going to request page: ', page)
		this.pageRequest.f(page);
		*/
		console.log('[App|componentWillMount|out]'); 
	} 

	
	render(){
		console.log('[App|render|in]');

		const state = this.state;
		const configuration = this.configuration;
		const services = this.services; 
		
		console.log('[App|render|out]');
		return (
            <section className="container-fluid">
				<Header configuration={configuration} />
					<section className="container">
					<Switch>
						<Route exact path='/' render={ (props) => <Parts {...props} state={state} configuration={configuration} services={services} /> } />
						<Route path='/parts/:id' render={(props) => <Part {...props} state={state} configuration={configuration}/>} />
					</Switch>
					</section>
				<Footer state={state} configuration={configuration} />
			</section>

			)
		
	}
};

App.propTypes = {
	configuration: PropTypes.object.isRequired
}

App.defaultProps = {
		configuration: null
}

export default App;


