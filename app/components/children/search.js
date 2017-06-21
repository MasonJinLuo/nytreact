var React = require('react');

var Search = React.createClass({
	render: function() {

		<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"> Search Parameter </h3>
					</div>
					<form role="form">
						<div className="col-lg-12 form-group">
							<label for="Search">Search Term:</label>
							<input type="text" className="form-control" id="searchTerm"></input>
						</div>
						<div className="col-lg-12 form-group">
							<label for="numRecords">Number of Records To Retrieve:</label>
							<select className="form-control" id="numRecords">
								<option value="1">1</option>
								<option value="5">5</option>
								<option value="10">10</option>
							</select>
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
	                        <button type="submit" id="search" className="btn btn-primary">Search</button>
	                        <button type="reset" id="reset" className="btn btn-default">Clear Results</button>
	                    </div>
					</form>
				</div>
			</div>
		</div>

	}
});

module.exports = Search;