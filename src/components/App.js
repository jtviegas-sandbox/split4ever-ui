
import React from 'react';
import DataService from '../services/data/index';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Functions from '../services/functions';


import Main from './Main';
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
			 data: {
				parts: {
					objs: []
					, pages: {}
				}
			}
		}

		
		this.pageRequest = function(ref){
			
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
		}(this);
		
		
	}

	componentWillMount(){
		console.log('[App|componentWillMount|in]');
		let page = 0;
		console.log('[App|componentWillMount] this.props.location: ', this.props.location)
		if(this.props.location)
			page = Functions.queryString2Page(this.props.location.search);
		console.log('[App|componentWillMount] going to request page: ', page)
		this.pageRequest.f(page);
		console.log('[App|componentWillMount|out]');
	}
	
	render(){
		console.log('[App|render|in]');
		const { data } = this.state
		const { configuration } = this.props
		const pageRequest = this.pageRequest
		
		console.log('[App|render|out]');
		return (
            <section className="container-fluid">
				<Header configuration={configuration} />
					<section className="container">
					<Switch>
						<Route exact path='/' render={ (props) => <Main {...props} parts={data.parts} configuration={configuration} onPageRequest={pageRequest.f} /> } />
						<Route path='/parts/:id' render={(props) => <Part {...props} data={data} configuration={configuration}/>} />
					</Switch>
					</section>
				<Footer data={data} configuration={configuration} />
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


