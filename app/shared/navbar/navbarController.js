app.controller("navbarController", function(){
	// $('.navigation-wrapper').affix({
	//   offset: {
	//     top: 20,
	//   }
	// });

	$('.navigation-blob').on('click', function() {
		$('.navigation-blob-wrapper').toggleClass('active');
	});
});