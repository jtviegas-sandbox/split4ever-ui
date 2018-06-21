
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
            <section className="main" >
				{this.state.parts.map(
					(part, i) => <SmallPartWidget data={part} />
				)}
			</section>
			)
	}
};


export default Main;