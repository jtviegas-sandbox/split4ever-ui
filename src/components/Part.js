
import React from 'react';

class Part extends React.Component {
	
	constructor(props){
		super(props)
		
		if( (!props.match) || (!props.parts) )
			throw new Error('!!! we need match and parts attributes !!!');
		
		this.state = props.parts.filter( p => p.id === props.match.params.id )[0];
		this.imageSrc = "data:image/" + this.state.images[0].type + ";base64," + this.state.images[0].data
	
	}

	
	render(){
		return (
			<section>
				<div className="card text-center mb-3">
					<img className="card-img-top" src={this.imageSrc} alt="Card image cap" />
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


export default Part;