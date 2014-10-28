var dummydata = require('../models/dummydata.js');

//helper search func
var fuzzMatch = function(needle, haystack) {
	var needle = needle.toUpperCase();
	var haystack = haystack.toUpperCase();

	if(haystack.indexOf(needle) > -1){
		return true;
	} else {
		return false;
	}
}

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res){
		res.render('search');
	},
	searchWord: function(req, res){
		//results array
		var results = []; 
		//get term from AJAX req
		var term = req.body.term;
		// for(category in dummydata) {
			for(language in dummydata.programming){
				if(term.toUpperCase() === language.toUpperCase()){
					results.push({
						language: language,
						description: dummydata.programming[language].desc
					});
					// console.log(language);
					// console.log(dummydata.programming[language].desc);
				}
			}//end inner for loop
			
		// }//end outer for loop
		// for( var i = 0; i < results.length; i++){

		// }
		console.log(results);
		// console.log(results[0].language);
		// console.log(results[0].description);
		// results = (results[0].language) + (results[0].description);
		res.send(results);
	}
};

module.exports = indexController;