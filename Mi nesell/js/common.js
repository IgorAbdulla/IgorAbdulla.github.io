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


var owl = $('.owl-carousel');
owl.owlCarousel({
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	loop:true,
	responsiveClass:true,
	margin:10,
	autoWidth:true,
	nav:false,
	items: 12,
	margin: 40,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
});

  // Custom Button
  $('.customNextBtn').click(function() {
  	owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
  	owl.trigger('prev.owl.carousel');
  });
  

  // hamburger
  (function() {
  	$(".menu_wrapper").on("click", function() {
  		$(".hamburger").toggleClass("animate");
      // $('.hamburger_menu').toggleClass('menu_active');
      $(".hamburger_menu").slideToggle("slow");
    });
  })();
});
