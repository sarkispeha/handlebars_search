$(document).on('ready', function() {
	//template to turn to html
	var templateSource = $('#search-tpl').html();

	//template generator
	var templateFunc = Handlebars.compile(templateSource);

	//AJAX request
	$(document).on('click', '#submit-btn', function(e){
		e.preventDefault();
		//find search term
		var searchTerm = $(this).closest('form').find('[name=searchField]').val();
		$('#results').text('');
		//send AJAX request
		$.post('/searchWord', {term: searchTerm}, function (responseData) {
			console.log(responseData[0].language);
			$('#language').append(responseData[0].language);
			$('#description').append(responseData[0].description);
		});
		
	});


});//end jQuery