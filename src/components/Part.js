
import React from 'react';
import PropTypes from 'prop-types';

class Part extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			 data: props.data
			, selection: props.selection
			, configuration: props.configuration
		}

		this.state.selection.part = this.state.data.parts.filter( p => p.id === props.match.params.id )[0];
	
	}

	
	render(){
		const part = this.state.selection.part
		const imageSrc = "data:image/" + part.images[0].type + ";base64," + part.images[0].data
		return (
			<section>
				<div className="card text-center mb-3">
					<img className="card-img-top" src={imageSrc} alt="" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
			</section>
			)
	}
};

Part.propTypes = {
	configuration: PropTypes.object.isRequired
	, data: PropTypes.object
	, selection: PropTypes.object
}

Part.defaultProps = {

}

export default Part;