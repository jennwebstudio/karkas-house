$(function () {
  // dropdown меню
    
  $('.is-drop').on('click', function () {
    $('.dropdown').toggleClass('dropdown--active');
    $('.arrow-icon').toggleClass('arrow-icon--active');
  });

  $(document).on('click', function (e) { // событие клика по веб-документу
		const menu = $('.menu'),
          drop = $('.dropdown');
		if ( !menu.is(e.target) & menu.has(e.target).length === 0 ) { 
      //  если клик был не по menu, не по его дочерним элементам
			drop.removeClass('dropdown--active');
      $('.arrow-icon').removeClass('arrow-icon--active');
		}
	});
  
  // мобильное меню

  $('.menu__icon, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });

  // слайдер hero

  $('.header__hero-slider').slick({
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  // видео 

  $('.why__video-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

});