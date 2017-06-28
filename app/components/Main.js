var React = require("react");
var Search = require("./children/search");

var axios = require("axios");

var Main = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="jumbotron head">
					<h1> New York Times </h1>
				</div>
				<Search />
			</div>
		);
	}

});

module.exports = Main;