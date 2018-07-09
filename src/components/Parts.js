
import React from 'react';
//import Functions from '../services/functions';
import SmallPartWidget from './SmallPartWidget';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import Functions from '../services/functions';

class Main extends React.Component {
	
	constructor(props){
		super(props)
		this.state = this.props.state;
		this.services = this.props.services;
		this.configuration = this.props.configuration;
	}
	
	componentWillReceiveProps(nextProps){
		console.log('[Parts|componentWillReceiveProps|in] nextProps:', nextProps);
		if( nextProps.location && nextProps.location.search ){
			console.log('[Parts|componentWillReceiveProps] we have a nextProps.location.search:', nextProps.location.search);
			let page = Functions.queryString2Page(nextProps.location.search);
			if( page !== this.state.page ){
				console.log('[Parts|componentWillReceiveProps] we have a new page:', page);
				this.loadPage(page);
			}
		}
		console.log('[Parts|componentWillReceiveProps|out]'); 
	}

	componentWillMount(){
		console.log('[Parts|componentWillMount|in]', this.props);
		let page = 0;
		if( 0 == this.props.location.search.length ){
			console.log('[Parts|componentWillMount] redirecting to page 0');
			this.props.history.push('/?page=0')
		}
		else {
			page = Functions.queryString2Page(this.props.location.search);
			this.loadPage(page);
		}
		console.log('[Parts|componentWillMount|out]'); 
	} 

	loadPage(page){
		console.log('[Parts|loadPage|in] page:', page);
		
		this.services.data.getParts(page, this.configuration.pagination.n, (e,r) =>{
					console.log('[Parts|loadPage|getParts|in]');
					if(e){
						console.log('[Parts|loadPage|getParts] challenges getting parts', e);	
					}
					else{
						console.log('[Parts|loadPage|getParts] got a set of parts: ', r.objs);
						this.state.parts = r;
						this.setState({page: page});
					}
					console.log('[Parts|loadPage|getParts|out]');
				});

		console.log('[Parts|loadPage|out]');
	}

	render(){
		console.log('[Parts|render|in]', this.state);
		const { configuration } = this.props;
		const parts = this.state.parts;
		const { first, previous, next, last } = parts.pages;
		console.log('parts', parts);
		console.log('[Parts|render|out]');
		return (
            <section>
				<div className="card-columns">
					{ parts.objs.map( (part, i) => <SmallPartWidget key={i} part={part} configuration={configuration} /> ) }
				</div>
				<Pagination first={first} previous={previous} next={next} last={last} />
			</section>
			)
	}
};

Main.propTypes = {
	configuration: PropTypes.object.isRequired
	, state: PropTypes.object.isRequired
	, services: PropTypes.object.isRequired
}

Main.defaultProps = {
	state: {}
	,  configuration: {}
	, services: f=>f
}

export default Main;