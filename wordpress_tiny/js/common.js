$(document).ready(function() {



// hamburger
(function () {
	$('.menu_wrapper').on('click', function() {
		$('.hamburger').toggleClass('animate');
		// $('.hamburger_menu').toggleClass('menu_active');
		$('.hamburger_menu').slideToggle('slow');


	})
})();


});
