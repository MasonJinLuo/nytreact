var React = require("react");
var Search = require("./children/search");
var Results = require("./children/results")
var Saved = require("./children/savedArticles");
var axios = require("axios");

var Main = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="jumbotron head">
					<h1> New York Times </h1>
				</div>
				<Search />
				<Results />
				<Saved />
			</div>
		);
	}

});

module.exports = Main;