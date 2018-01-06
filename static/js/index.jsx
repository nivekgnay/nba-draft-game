import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";
import tablesorter from "tablesorter"

$('.dataframe > tbody > tr').click(function(event) {
    console.log("{{ my_string }}");
    console.log($(this));
});

$(document).ready(function(){
    $('.dataframe').tablesorter(); 
});

function fetch_and_render() {
	return fetch('./api/stats')
    .then(function(response) {
		if (response.status !== 200) {
		console.log('Looks like there was a problem. Status Code: ' +
		  response.status);
		return;
		}

	    // Examine the text in the response
	    response.json().then(function(data) {
	        console.log(data);
	        ReactDOM.render(<App data={data.data} keys={data.keys} count={data.count} />, 
	        	document.getElementById("test"));
	    });
	})
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}

fetch_and_render()






