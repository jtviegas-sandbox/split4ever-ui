
import React from 'react';

class SmallPartWidget extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.data)
			throw new Error('!!! no state attribute being provided !!!');
		
		this.state = props.data;
		this.imageSrc = "data:image/png;base64," + this.state.images[0].data
	}

	
	render(){
		return (
            <div class="card small-part-widget">
				<img class="card-img-top" src={this.imageSrc} alt={this.state.images[0].name} />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			)
	}
};


export default SmallPartWidget;