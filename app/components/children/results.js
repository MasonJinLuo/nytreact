var React = require('react');

var Results = React.createClass({
	render: function() {
		return(

		<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"> Results </h3>
					</div>
					<div className="panel-body" id="unloadResults">
					</div>
				</div>
			</div>
		</div>
		);
	}
});

module.exports = Results;