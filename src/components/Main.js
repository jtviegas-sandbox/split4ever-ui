
import React from 'react';
import queryString from 'query-string';
import SmallPartWidget from './SmallPartWidget';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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

		this.state.selection.page = 0;
		if(props.location.search){
			let searchObj = queryString.parse(props.location.search);
			if(searchObj.page)
				this.state.selection.page = parseInt(searchObj.page); 
		}
		
/*		this.state.link = '/?n=' + (parseInt(this.state.selection.n) + parseInt(this.state.configuration.pagination.n))
		console.log(this.state)*/
	}
	
	componentWillMount() {

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
		const { configuration, data, selection} = this.state
		const previousLink = '/?page=' + data.parts.pages.previous;
		const nextLink = '/?page=' + data.parts.pages.next;
		
		const match = this.state.match;
		console.log(this.state.match)
		return (
            <section>
				<div className="card-columns">
				{data.parts.objs.map(
					(part, i) => <SmallPartWidget key={i} part={part} configuration={configuration} selection={selection} match={match} />
				)}
				</div>

				<nav aria-label="...">
				  <ul className="pagination pagination-sm">
				  <li className="page-item"><NavLink className="page-link" to={ '/?page=' + data.parts.pages.first } >first</NavLink></li>
				  {
					  (data.parts.pages.previous)?
						  <li className="page-item"><NavLink className="page-link" to={ '/?page=' + data.parts.pages.previous } >previous</NavLink></li>
						  : <li className="page-item disabled"><NavLink className="page-link" to={ '/?page=' + data.parts.pages.previous } >previous</NavLink></li>
				  }
				  {
					  (data.parts.pages.next)?
						  <li className="page-item"><NavLink className="page-link" to={ '/?page=' + data.parts.pages.next } >next</NavLink></li>
						  : <li className="page-item disabled"><NavLink className="page-link" to={ '/?page=' + data.parts.pages.next } >next</NavLink></li>
				  }
				  <li className="page-item"><NavLink className="page-link" to={ '/?page=' + data.parts.pages.last } >last</NavLink></li>
			    
				  </ul>
				</nav>

			</section>
			)
	}
};

Main.propTypes = {
	configuration: PropTypes.object.isRequired
	, data: PropTypes.object
	, selection: PropTypes.object
	, services: PropTypes.object
}

Main.defaultProps = {

}

export default Main;