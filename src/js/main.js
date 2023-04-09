
  const isDrop = document.querySelector('.is-drop');
  const dropDown = document.querySelector('.dropdown');
  const arrowIcon = document.querySelector('.arrow-icon');
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu__icon');

  // dropdown меню

  isDrop.addEventListener('click', () => {
    dropDown.classList.toggle('dropdown--active');
    arrowIcon.classList.toggle('arrow-icon--active');
  });

  document.addEventListener('click', (e) => {   // событие клика по веб-документу
    if (!e.target.closest('.menu')) {
      //  если клик был не по menu, не по его дочерним элементам
      dropDown.classList.remove('dropdown--active');
      arrowIcon.classList.remove('arrow-icon--active');
    }
  });
  
  // мобильное меню

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
  });

  const links = Array.from(menu.children);
  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('menu--active');
    });
  });

  // слайдер hero

  const initSlider = () => {
    new Swiper ('.swiper', {
      
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
      },
      effect: 'fade',
    });
  };

  initSlider();
  
  // видео 

  


  