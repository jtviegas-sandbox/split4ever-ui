
import React from 'react';
import SmallPartWidget from './SmallPartWidget';

class Main extends React.Component {
	
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
            <section>
				<div className="card-columns">
				{this.state.parts.map(
					(part, i) => <SmallPartWidget data={part} />
				)}
				</div>
			</section>
			)
	}
};


export default Main;