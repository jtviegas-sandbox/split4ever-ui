import queryString from 'query-string';

const Functions =  {

	queryString2Page(search){
		console.log('[Functions|queryString2Page|in] search:', search);
		let r = 0
		let searchObj = queryString.parse(search);
		console.log('[Functions|queryString2Page] searchObj:', searchObj);
		if(searchObj.page)
			r = parseInt(searchObj.page, 10); 
		console.log('[Functions|queryString2Page|out] page:', r);
		return r;
	}
		
    
};
export default Functions;