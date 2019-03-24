
import React from 'react';
import PartSmallWidget from './PartSmallWidget';
import Pagination from './Pagination';
import DataService from '../services/data/index';
import configuration from '../configuration';
import qs from 'query-string';

class Parts extends React.Component {

	constructor(props){
		super(props)
		this.props = props;
		this.data = new DataService(configuration);
		this.state = {
			parts: {}
		}
	}

	loadParts(properties){
		console.log('[Parts|loadParts|in]', properties);
		let params = qs.parse(properties.location.search);
		console.log('params:', params);

		let stage = 'prod';
		if(params.dev)
			stage = 'dev';
		let fromKey = null;
		if(params.fromKey)
			fromKey = params.fromKey;
		let pageSize = configuration.pageSize;
		if(params.pageSize)
			pageSize = params.pageSize;

		this.data.getParts(stage, fromKey, pageSize,
			(e,o) => {
				if(e){
					console.log('[Parts|loadParts|callback] challenges getting part', e);
				}
				else{
					console.log('[Parts|loadParts|callback] going to set state.part: ', o)
					this.setState({parts: o});
				}
			});
		console.log('[Parts|loadParts|out]');
	}

	componentWillMount(){
		console.log('[Parts|componentWillMount|in]', this.props);
		this.loadParts(this.props);
		console.log('[Parts|componentWillMount|out]');
	}

	componentWillReceiveProps(nextProps){
		console.log('[Parts|componentWillReceiveProps|in]', nextProps);
		this.loadParts(nextProps);
		console.log('[Parts|componentWillReceiveProps|out]');
	}

	render(){
		console.log('[Parts|render|in]', this.props);
		const { parts } = this.state;
		const { history } = this.props;
		console.log('[Parts|render|out]');

		return (
			<section>
				<div className="card-columns">
					{ parts.data.map( (part, i) => <PartSmallWidget part={part} key={i} history={history}/>  ) }
				</div>
				<Pagination first={parts.first} previous={parts.previous} next={parts.next} last={parts.last} />
			</section>
		)
	}
};


export default Parts;
