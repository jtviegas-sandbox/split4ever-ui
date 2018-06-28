
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class SmallPartWidget extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			 part: props.part
			, selection: props.selection
			, configuration: props.configuration
		}
	}

	render(){
		
		const { id, name, notes, category, subcategory, price, images } = this.state.part
		const imageSrc = "data:image/" + images[0].type + ";base64," + images[0].data;
		const link = "/parts/" + id
		
		return (
            <div className="card small-part-widget">
				<img className="card-img-top" src={imageSrc} alt={images[0].name} />
				<div className="card-body">
					<h5 className="card-title"> {name} </h5>
					<p className="card-text">{notes}</p>
				</div>
				<ul className="list-group list-group-flush text-center">
					<li className="list-group-item"><b>category: </b>{category}</li>
					<li className="list-group-item"><b>subcategory: </b>{subcategory}</li>
					<li className="list-group-item">{price} €</li>
				</ul>
				<div className="card-footer text-right">
					<NavLink to={link} className="card-link">check it</NavLink>
				</div>
			</div>
			)
	}
}

SmallPartWidget.propTypes = {
		part: PropTypes.object.isRequired
}



export default SmallPartWidget;