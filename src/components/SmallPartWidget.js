
import React from 'react';
import { NavLink } from 'react-router-dom';
class SmallPartWidget extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.data)
			throw new Error('!!! no state attribute being provided !!!');
		
		this.state = props.data;
		this.imageSrc = "data:image/" + this.state.images[0].type + ";base64," + this.state.images[0].data
		this.link = "/parts/" + this.state.id
	}

	
	render(){
		return (
            <div className="card small-part-widget">
				<img className="card-img-top" src={this.imageSrc} alt={this.state.images[0].name} />
				<div className="card-body">
					<h5 className="card-title">{this.state.name}</h5>
					<p className="card-text">{this.state.notes}</p>
				</div>
				<ul className="list-group list-group-flush text-center">
					<li className="list-group-item"><b>category: </b>{this.state.category}</li>
					<li className="list-group-item"><b>subcategory: </b>{this.state.subcategory}</li>
					<li className="list-group-item">{this.state.price} €</li>
				</ul>
				<div className="card-footer text-right">
					<NavLink to={this.link} className="card-link">check it</NavLink>
				</div>
			</div>
			)
	}
};


export default SmallPartWidget;