
import React from 'react';

class Header extends React.Component {
	
	constructor(props){
		super(props)
		
		if(!props.state)
			throw new Error('!!! no state attribute being provided !!!');
		
		this.state = props.state;
	}
	
	componentWillMount() {

	}
	
	render(){
		return (
            <header>
				<div className="collapse" id="navbarHeader">
					<div className="container">
					<div className="row">
						<div className="col-sm-8 col-md-7 py-4">
						<h4 className="text-muted">About</h4>
						<p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
						</div>
						<div className="col-sm-4 offset-md-1 py-4">
						<h4 className="text-muted">Contact</h4>
						<ul className="list-unstyled">
							<li><a href="" className="text-muted">Follow on Twitter</a></li>
							<li><a href="" className="text-muted">Like on Facebook</a></li>
							<li><a href="" className="text-muted">Email me</a></li>
						</ul>
						</div>
					</div>
					</div>
				</div>
				<div className="navbar navbar-light box-shadow">
					<div className="container d-flex justify-content-between">
					<a href="" className="navbar-brand d-flex align-items-center">
						<img src="images/header.png" className="rounded" alt="..."/>
						<strong>Split4ever</strong>
					</a>
					<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					</div>
				</div>
			</header>
			)
	}
};


export default Header;