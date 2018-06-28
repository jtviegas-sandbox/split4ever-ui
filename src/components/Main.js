
import React from 'react';
import SmallPartWidget from './SmallPartWidget';
import PropTypes from 'prop-types';

class Main extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			 data: props.data
			, selection: props.selection
			, configuration: props.configuration
		}
	}
	
	render(){
		const { configuration, data, selection } = this.state
		return (
            <section>
				<div className="card-columns">
				{data.parts.map(
					(part, i) => <SmallPartWidget key={i} part={part} configuration={configuration} selection={selection} />
				)}
				</div>
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