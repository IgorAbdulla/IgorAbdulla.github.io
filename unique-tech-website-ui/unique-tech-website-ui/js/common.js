
$(document).ready(function() {
	
	$(".header-carousel").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 1,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          loop:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          smartSpeed: 1000
        });

	$('#my-menu').mmenu({                                      //инициализация mmenu
		configuration: {hardwareAcceleration: false},      //хз зачем, но без этого может не работать
		extensions: ['theme-dark', 'fx-menu-slide', 'pagedim-black', 'position-right'], 
		//"fullscreen"
		'navbar': {
			title: '<img src="../img/logo.png">' //подключение картинки вверху меню
		},
		"navbars": [{
			"position": "top",
			"content": [
			"breadcrumbs",
			"close"]}]

		});

	var API = $("#my-menu").data( "mmenu" );

	$(".hamburger").click(function() {    //открываем меню по клику на гамбургер
		API.open();
	});
	var $hamburger = $(".hamburger");

	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
	API.bind( "open:finish", function( $panel ) {    //в момент завершения анимации открытия меню
		$(".hamburger").addClass('is-active');   //добавляем класс гамбургеру, чтобы он видоизменился
	});

	API.bind( "close:finish", function( $panel ) {      //в момент завершения анимации закрытия меню
		$(".hamburger").removeClass('is-active');   //добавляем класс гамбургеру, чтобы он видоизменился
	});

	element.scrollIntoView({ behavior: 'smooth' })


lazyload();
	
});



