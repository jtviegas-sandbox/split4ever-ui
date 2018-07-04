
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
		}

		if(props.location.search){
			let searchObj = queryString.parse(props.location.search);
			if(searchObj.n){
				this.state.selection.n = parseInt(searchObj.n)-1; 
			}
		}
		else {
			this.state.selection.n = parseInt(this.state.configuration.pagination.n) - 1;
		}

		this.state.link = '/?n=' + (parseInt(this.state.selection.n) + parseInt(this.state.configuration.pagination.n))

	}
	
	render(){
		const { configuration, data, selection, link } = this.state
		console.log(link)
		return (
            <section>
				<div className="card-columns">
				{data.parts.map(
					(part, i) => <SmallPartWidget key={i} part={part} configuration={configuration} selection={selection} />
				)}
				</div>
					{ (link) ? 
						<div className="text-right"><NavLink to={link}>more</NavLink></div>
						:''
					}
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