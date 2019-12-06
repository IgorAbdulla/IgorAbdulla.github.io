$(document).ready(function() {

// image
var elements = $('.right_side_post img');

for (var i = 0; i < elements.length; i++) {
	let image = new Image();
	image.src = elements[i].src;
	if (image.height < 270) {
		$(elements[i]).css('height', '100%')
		$(elements[i]).css('position', 'static')
	}
}

// hamburger
(function () {
	$('.menu_wrapper').on('click', function() {
		$('.hamburger').toggleClass('animate');
		// $('.hamburger_menu').toggleClass('menu_active');
		$('.hamburger_menu').slideToggle('slow');


	})
})();


});
