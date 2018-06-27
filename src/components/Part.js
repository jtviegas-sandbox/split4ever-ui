
import React from 'react';

class Part extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.data)
			throw new Error('!!! no state attribute being provided !!!');
		
		this.state = props.data;
		this.imageSrc = "data:image/" + this.state.images[0].type + ";base64," + this.state.images[0].data
		this.link = "#/parts/" + this.state.id
	}

	
	render(){
		return (
            <div className="card mb-3">
				<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
			</div>
			)
	}
};


export default Part;