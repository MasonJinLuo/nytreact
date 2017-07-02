// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var axios = require('axios');

// Include the main Parent Component
var Main = require("./components/Main");

$(document).on("click", ".saveButton", function() {
  var thisId = $(this).parent().attr("id");
  var thisURL = $(this).data("url");
  var thisTitle = $(this).data("title");
  console.log("saved article: " + thisId) //gets the id from the wrapper
  console.log(thisTitle) //hopefully finds the title
  console.log(thisURL)
	axios.post('/save', {
    title: thisTitle,
    date: Date.now(),
    url: thisURL
  })
  .then(function (response) {
    console.log(response); //should recieve "saved article"
  })
  .catch(function (error) {
    console.log(error);
  });

});


// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main />, document.getElementById("app"));