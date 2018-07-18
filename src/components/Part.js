
import React from 'react';
import PropTypes from 'prop-types';
import ReadMore from './ReadMore';

class Part extends React.Component {
	
	constructor(props){
		super(props)
		console.log('[Part|constructor|in] props:', props);
		this.state = props.state;
		console.log('[Part|constructor|out] state:', this.state);
	}

	componentWillMount(){
		console.log('[Part|componentWillMount|in]', this.props);
		this.load(this.props.match.params.id);
		console.log('[Part|componentWillMount|out]'); 
	}
	
	load(id){
		console.log('[Part|load|in] id:', id);
		
		this.state.context.services.data.getPart(id, (e,r) =>{
					console.log('[Part|load|getPart|in]');
					if(e){
						console.log('[Part|load|getPart] challenges getting part', e);	
					}
					else{
						console.log('[Part|load|getPart] going to set state.part: ', r)
						this.setState({part: r});
					}
					console.log('[Part|load|getPart|out]');
				});

		console.log('[Part|load|out]');
	}
	
	render(){

		return (
			<section>
				<div className="card text-center mb-3">
					
					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

					  <ol className="carousel-indicators">
					  { this.state.part.images.map( (img, i) => <li data-target="#carouselExampleIndicators" key={i} data-slide-to={i} className={i==0 ? "active" : "" }  ></li> ) }
					  </ol>
					  <div className="carousel-inner">
					  	{ this.state.part.images.map( (img, i) => 
					  		<div key={img.name} className={i==0 ? "carousel-item active" : "carousel-item" }>
						      <img className="d-block w-100" src={"data:image/" + img.type + ";base64," + img.data} alt={img.name}></img>
						    </div>
					  		) 
					  	}
					  </div>
					  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
					
					<div className="card-body">
						<h5 className="card-title"> {this.state.part.name} </h5>
						<ReadMore className="card-text" lines={1} >
							{this.state.part.notes}
						</ReadMore>
					</div>
					<ul className="list-group list-group-flush text-center">
					<li className="list-group-item"><b>id: </b>{this.state.part.id}</li>
						<li className="list-group-item"><b>category: </b>{this.state.part.category}</li>
						<li className="list-group-item"><b>subcategory: </b>{this.state.part.subcategory}</li>
						<li className="list-group-item">{this.state.part.price} €</li>
					</ul>
				</div>
			</section>
			)
	}
};

Part.propTypes = {
		state: PropTypes.object.isRequired
	}
Part.defaultProps = {
		state: {}
	}

export default Part;