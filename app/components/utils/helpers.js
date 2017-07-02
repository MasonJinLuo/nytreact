var axios = require('axios');


var helper = {

	runQuery: function(term, start, end) {
	var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";
    console.log(term + start + end)

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': "a9f034ee441b40bf893d3527464d58f6",
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(function(results){
    	console.log(results.data.response.docs)
		return results.data.response.docs;

    });
  },

	savedArticles: function(title, url){
		return axios.get('/api/saved').then(function(results){
			return results;
		})
	}



}


module.exports = helper;