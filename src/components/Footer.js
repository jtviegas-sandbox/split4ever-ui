import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			 selection: {
				user: 0
				, part: null
			}
			, configuration: props.configuration

		}
	}
	
	componentWillMount() {

	}
	
	render(){
		const { configuration, selection } = this.state;
		return (
            <footer className="text-muted">
				<div className="container">
				<hr className="featurette-divider" />
					<p className="float-right">
						<a href="/">Back to top</a>
					</p>
					<p>© 2018 split4ever</p>
				</div>
			</footer>
			)
	}
};


Footer.propTypes = {
	configuration: PropTypes.object.isRequired
	, selection: PropTypes.object
}

Footer.defaultProps = {

}

export default Footer;