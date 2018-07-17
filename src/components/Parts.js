
import React from 'react';
import SmallPartWidget from './SmallPartWidget';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import Functions from '../services/functions';
import qs from 'query-string';

class Parts extends React.Component {
	
	constructor(props){
		super(props)
		console.log('[Parts|constructor|in] state:', props);
		this.state = props.state;
		this.state.page = 0;
	}

	componentWillMount(){
		console.log('[Parts|componentWillMount|in]', this.props);
		if(0 < this.props.location.search.length){
			const queryParams = qs.parse(this.props.location.search);
			if( queryParams.page )
				this.state.page = parseInt(queryParams.page, 10);
		}
		this.loadPage(this.state.page);
		console.log('[Parts|componentWillMount|out]'); 
	}
	
	componentWillReceiveProps(nextProps){
		console.log('[Parts|componentWillReceiveProps|in]', nextProps);
		if(0 < nextProps.location.search.length){
			const queryParams = qs.parse(nextProps.location.search);
			if( queryParams.page )
				this.state.page = parseInt(queryParams.page, 10);
		}
		this.loadPage(this.state.page);
		console.log('[Parts|componentWillReceiveProps|out]'); 
	} 

	loadPage(page){
		console.log('[Parts|loadPage|in] page:', page);
		
		this.state.context.services.data.getParts(page, this.state.context.configuration.pagination.n, (e,r) =>{
					console.log('[Parts|loadPage|getParts|in]');
					if(e){
						console.log('[Parts|loadPage|getParts] challenges getting parts', e);	
					}
					else{
						console.log('[Parts|loadPage|getParts] going to set state.parts: ', r)
						this.setState({parts: r});
					}
					console.log('[Parts|loadPage|getParts|out]');
				});

		console.log('[Parts|loadPage|out]');
	}

	render(){
		console.log('[Parts|render|in]', this.state);
		const { configuration } = this.state.context;
		const { first, previous, next, last } = this.state.parts.pages;
		console.log('[Parts|render|out]');
		return (
            <section>
				<div className="card-columns">
					{ this.state.parts.objs.map( (part, i) => <SmallPartWidget key={part.id} part={part} configuration={configuration} /> ) }
				</div>
				<Pagination first={first} previous={previous} next={next} last={last} />
			</section>
			)
	}
};

Parts.propTypes = {
	state: PropTypes.object.isRequired
}

Parts.defaultProps = {
	state: {}
}

export default Parts;