
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
					<p className="float-right">
						<a href="#">Back to top</a>
					</p>
					<p>...customize it for yourself!</p>
					<p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
				</div>
			</footer>
			)
	}
};


export default Footer;