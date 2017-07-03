var React = require('react');
var axios = require('axios');
var helper = require('../utils/helpers');
var Results = require('./results');
var SavedArticles = require('./savedarticles');

var Search = React.createClass({
	getInitialState: function() {
		return {
	      results: [],
	      savedData: ""
	    }
	},

	componentDidMount: function() {
	console.log("okay this is happening")
    return axios.get('/saved')
      .then(function(results){
      	console.log("front end received data", results.data);
        this.setState({
        	savedData: results.data
        });
      }.bind(this))
  	},

  	handleClick: function() {
    var term = $("#searchTerm").val();
	var start = $("#input-start-year").val();
	var end = $("#input-end-year").val();
	console.log("search click works");

	if( term != "" || start != "" || end != ""){
		helper.runQuery(term, start, end)

		.then(function(data)  {
			console.log(data)
	    	if (data != this.state.results) {
	        	this.setState({
	            results: data
	        	})
	        }

	    }.bind(this))
	}else{
		alert("please fill out all the fields");
	}

	},

	render: function() {
		console.log("new" , this.state.savedData)
		return(
		<div>
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

			<div className="row">
				<Results retrievedData={this.state.results}/>
			</div>
			<div className="row">
				<SavedArticles retrievedSaved={this.state.savedData}/>
			</div>
		</div>

		);
	}
});

module.exports = Search;
