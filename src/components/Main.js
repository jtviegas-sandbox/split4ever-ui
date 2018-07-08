
import React from 'react';
import Functions from '../services/functions';
import SmallPartWidget from './SmallPartWidget';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

class Main extends React.Component {
	
	constructor(props){
		super(props)
		this.query = this.props.location.search;
	}
	
	componentWillReceiveProps(nextProps){
		console.log('[Main|componentWillReceiveProps|in] nextProps:', nextProps);
		console.log('[Main|componentWillReceiveProps] this.props.location.search:', this.props.location.search);
		console.log('[Main|componentWillReceiveProps] nextProps.location.search: ', nextProps.location.search);
		console.log('[Main|componentWillReceiveProps] this.query: ', this.query);
		
		if(this.query !== nextProps.location.search){
			console.log('[Main|componentWillReceiveProps] new location.search in nextProps, going to request new page');
			this.props.onPageRequest(Functions.queryString2Page(nextProps.location.search));
		}
		this.query = nextProps.location.search;
		console.log('[Main|componentWillReceiveProps|out]');
	}

	render(){
		console.log('[Main|render|in]');
		const { configuration, parts } = this.props;
		const { first, previous, next, last } = parts.pages;
		console.log('parts', parts);
		console.log('[Main|render|out]');
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
	, parts: PropTypes.object.isRequired
	, onPageRequest: PropTypes.func.isRequired
}

Main.defaultProps = {
	parts: {}
	,  configuration: {}
	, onPageRequest: f=>f
}

export default Main;