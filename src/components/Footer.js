
import React from 'react';

class Footer extends React.Component {
	
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
            <footer className="text-muted">
			
				<div className="container">
				<hr className="featurette-divider" />
					<p className="float-right">
						<a href="#">Back to top</a>
					</p>
					<p>© 2018 split4ever</p>
				</div>
			</footer>
			)
	}
};


export default Footer;