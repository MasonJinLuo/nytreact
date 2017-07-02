var React = require('react');
var helper = require('../utils/helpers');


var Results = React.createClass({


	render: function() {

    var articles = this.props.retrievedData;
    console.log(articles);
      var markup = articles.map(function(search, i) {
        console.log(search.headline.main) //should give me the title of the article
        console.log(search.web_url) // should give the URL of that array
        console.log(i) //gives the index of the article in that array
        var title = search.headline.main;
        var url = search.web_url;
          return(
              <div className="resultsContainer" id={i}>
                  <a href={url} className="results">{title}</a>
                  <button className="btn btn-success saveButton" data-title={title} data-url={url}> Save </button>
              </div>
              );
      });
  
  		return(
  			<div className="col-lg-12">
  				<div className="panel panel-primary">
  					<div className="panel-heading">
  						<h3 className="panel-title"> Results </h3>
  					</div>
  					<div className="panel-body" id="unloadResults">
             {markup}
  					</div>
  				</div>
  			</div>
  		);
	}
});

module.exports = Results;