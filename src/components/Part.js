
import React from 'react';
import ReadMore from './ReadMore';
import DataService from '../services/data/index';
import configuration from '../configuration';
import qs from "query-string";

class Part extends React.Component {

	constructor(props){
		super(props)
		this.props = props;
		this.data = new DataService(configuration);
		this.state = {
			part: {}
		}
	}

	loadPart(properties){
		console.log('[Part|loadPart|in]', properties);

		let params = qs.parse(properties.location.search);

		let stage = 'prod';
		if(params.dev)
			stage = 'dev';

		let key = null;
		if( properties.match && properties.match.isExact && properties.match.params.id)
			key = properties.match.params.id;
		else
			throw new Error('!!! no id found !!!');

		this.data.getPart(stage, key,
			(e,o) => {
				if(e){
					console.log('[Part|loadPart|callback] challenges getting part', e);
				}
				else{
					console.log('[Part|loadPart|callback] going to set state.part: ', o)
					this.setState({part: o});
				}
			});
		console.log('[Part|loadPart|out]');
	}

	componentWillMount(){
		console.log('[Part|componentWillMount|in]', this.props);
		this.loadPart(this.props);
		console.log('[Part|componentWillMount|out]');
	}

	componentWillReceiveProps(nextProps){
		console.log('[Part|componentWillReceiveProps|in]', nextProps);
		this.loadPart(nextProps);
		console.log('[Part|componentWillReceiveProps|out]');
	}


	render(){
		console.log('[Part|render|in]', this.props);
		const { part } = this.state;
		console.log('[Part|render|out]');

		return (
			<section>
				<div className="card text-center mb-3">

					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

						<ol className="carousel-indicators">
							{ part.images.map( (img, i) => <li data-target="#carouselExampleIndicators" key={i} data-slide-to={i} className={i==0 ? "active" : "" }  ></li> ) }
						</ol>
						<div className="carousel-inner">
							{ part.images.map( (img, i) =>
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
				</div>
			</section>
		)
	}
};

export default Part;