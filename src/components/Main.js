
import React from 'react';
import queryString from 'query-string';
import SmallPartWidget from './SmallPartWidget';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

class Main extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			 data: props.data
			, selection: props.selection
			, configuration: props.configuration
			, services: props.services
		}
	}

	componentWillReceiveProps(nextProps){
		console.log('[render] query string has changed going to update');
		this.handleUpdate(nextProps.location.search);
	}

	componentWillMount() {
		this.handleUpdate(this.props.location.search);
	}

	shouldComponentUpdate(){
		console.log('[shouldComponentUpdate|in]');

		console.log('[shouldComponentUpdate|out]');
		return true;
	}

	handleUpdate(query) {
		console.log('[handleUpdate|in]');
		this.state.selection.page = 0;
		if(query){
			let searchObj = queryString.parse(query);
			if(searchObj.page)
				this.state.selection.page = parseInt(searchObj.page); 
		}

		var callback = function(ref){
			var f = function(e,r){
				console.log('[handleUpdate|f|in]');
				if(e)
					console.log('[handleUpdate|f] challenges getting parts', e);
				else{
					console.log('[handleUpdate|f] got a set of parts: ', r.objs.length);
					let data = ref.state.data;
					data.parts = r;
					console.log(r);
					ref.setState({data:data});
				}
				console.log('[handleUpdate|f|out]');
			};
			return {f:f};
		}(this);
		this.state.services.data.getParts(this.state.selection.page, this.state.configuration.pagination.n, callback.f);
		console.log('[handleUpdate|out]');
	}
	

	render(){
		console.log('[render|in]');
	
		const { configuration, data, selection} = this.state;
		const { first, previous, next, last } = data.parts.pages;
		console.log(first, previous, next, last);
		console.log(data.parts.objs);
		console.log('[render|out]');
		return (
            <section>
				<div className="card-columns">
					{ data.parts.objs.map( (part, i) => <SmallPartWidget key={i} part={part} configuration={configuration} selection={selection} /> ) }
				</div>
				<Pagination first={first} previous={previous} next={next} last={last} />
			</section>
			)
	}
};

Main.propTypes = {
	configuration: PropTypes.object.isRequired
	, data: PropTypes.object
	, selection: PropTypes.object
}

Main.defaultProps = {

}

export default Main;