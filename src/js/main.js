$(function () {
  // dropdown меню
    
  $('.is-drop').on('click', function () {
    $('.dropdown').toggleClass('dropdown--active');
    $('.list-icon').toggleClass('list-icon--active');
  });

  $(document).on('click', function (e) { // событие клика по веб-документу
		const menu = $('.menu'),
          drop = $('.dropdown');
		if ( !menu.is(e.target) & menu.has(e.target).length === 0 ) { //  если клик был не по menu, не по его дочерним элементам
			drop.removeClass('dropdown--active');
		}
	});
  
  // мобильное меню

  $('.menu__icon, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });



});