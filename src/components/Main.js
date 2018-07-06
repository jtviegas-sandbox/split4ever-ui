
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
			, match: props.location.search
		}
	}

	componentWillMount() {
		try{console.log(this.props.location.search)}catch(e){}
	}
	componentDidMount() {

		try{console.log(this.props.location.search)}catch(e){}
	
		this.state.selection.page = 0;
		if(this.props.location.search){
			let searchObj = queryString.parse(this.props.location.search);
			if(searchObj.page)
				this.state.selection.page = parseInt(searchObj.page); 
		}
		
		this.state.services.data.getParts(this.state.selection.page, this.state.configuration.pagination.n, (e,r) => {
			if(e)
				console.log('challenges getting parts', e);
			else{
				console.log('got a set of parts: ', r.objs.length)
				let data = this.state.data;
				data.parts = r;
				console.log(r)
				this.setState({data});
			}
		});
		
	}
	

	render(){
		try{console.log(this.props.location.search)}catch(e){}
	
		const { configuration, data, selection} = this.state;
		const { first, previous, next, last } = data.parts.pages;
		console.log(first, previous, next, last);
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