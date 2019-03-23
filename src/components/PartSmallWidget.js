
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReadMore from './ReadMore';



const PartSmallWidget = ({part, history}) =>
	<div className="card small-part-widget">
		<img className="card-img-top" src={"data:image/" + part.images[0].type + ";base64," + part.images[0].data} alt={part.images[0].name} />
		<div className="card-body">
			<h5 className="card-title"> {part.name} </h5>
			<ReadMore className="card-text" lines={1} >
				{part.notes}
			</ReadMore>
		</div>
		<ul className="list-group list-group-flush text-center">
			<li className="list-group-item"><b>id: </b>{part.id}</li>
			<li className="list-group-item"><b>number: </b>{part.number}</li>
			<li className="list-group-item"><b>family: </b>{part.family}</li>
			<li className="list-group-item"><b>category: </b>{part.category}</li>
			<li className="list-group-item"><b>subcategory: </b>{part.subcategory}</li>
			<li className="list-group-item">{part.price} €</li>
		</ul>
		<div className="card-footer text-right">
			<NavLink to={"/parts/" + part.id} className="card-link">check it</NavLink>
		</div>
	</div>



export default withRouter(PartSmallWidget);