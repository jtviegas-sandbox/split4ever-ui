import queryString from 'query-string';

const Functions =  {

	queryString2Page(search){
		console.log('[Functions|queryString2Page|in]');
		let r = 0
		let searchObj = queryString.parse(search);
		if(searchObj.page)
			r = parseInt(searchObj.page); 
		console.log('[Functions|queryString2Page|out] page:', r);
		return r;
	}
		
    
};
export default Functions;