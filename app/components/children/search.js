var React = require('react');
var axios = require('axios');

var Search = React.createClass({


  handleClick: function() {
    var searchTerm;
	var start;
	var end;
	console.log("search click works")

	// return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
	// 	params:{
	// 		'api-key': "a9f034ee441b40bf893d3527464d58f6",
	// 		'q': searchTerm,
	// 		'start': start + "0101",
	// 		'end': end + "0101"
	// 	}
	// }).done(function(results){
	// 	console.log(results);
	// });

},

	render: function() {
		return(

		<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"> Search Parameter </h3>
					</div>
					<form role="form" className="panel-body">
						<div className="col-lg-12 form-group">
							<br></br>
							<label for="Search">Search Term:</label>
							<input type="text" className="form-control" id="searchTerm"></input>
						</div>
						<div className="col-lg-12 form-group">
	                        <label className="col-lg-6 control-label">Start Year (Optional):</label>
	                        <input type="text" className="form-control" id="input-start-year" placeholder="1980"></input>
	                    </div>

	                    <div className="col-lg-12 form-group">
	                        <label className="col-lg-6 control-label">End Year (Optional):</label>
	                        <input type="text" className="form-control" id="input-end-year" placeholder="2016"></input>
	                    </div>
	                    <div className="col-lg-12">
	                        <button type="button" id="search" className="btn btn-primary" onClick={this.handleClick}>Search</button>
	                        <button type="reset" id="reset" className="btn btn-default">Clear Results</button>
	                    </div>
					</form>
				</div>
			</div>
		</div>
		);
	}
});

module.exports = Search;