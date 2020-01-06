$(document).ready(function() {


// When we click on the LI
$(".main-navbar a").click(function(){
  // If this isn't already active
  if (!$(this).hasClass("active")) {
    // Remove the class from anything that is active
    $("a.active").removeClass("active");
    // And make this active
    $(this).addClass("active");
  }
});


	$('.device-width-center').addClass('col-center');


var owl = $('.owl-carousel');
owl.owlCarousel({
	loop:true,
	responsiveClass:true,
	autoWidth:true,
	margin: 40,
	nav:false,
	items: 12,
	center: true,
	itemsDesktop : [1100,3],
	itemsDesktopSmall : [979,3],
});

  // Custom Button
  $('.customNextBtn').click(function() {
  	owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
  	owl.trigger('prev.owl.carousel');
  });
  

  //range
$("input[type=range]").mousemove(function (e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #C0E703), ' +
        'color-stop(' + percent + '%, #272D32)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #DF7164 0%, #DF7164 ' + percent + '%, #F5D0CC ' + percent + '%, #F5D0CC 100%)');
});

  // hamburger
  (function() {
  	$(".menu__hamburger--wrapper").on("click", function() {
  		$(".hamburger").toggleClass("animate");
      // $('.hamburger_menu').toggleClass('menu_active');
      $(".menu__hamburger").slideToggle("slow");
    });
  })();
});
