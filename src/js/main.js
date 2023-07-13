
  
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu__icon');
  const footerMenu = document.querySelector('.footer__menu');
  const footerLinkUp = document.querySelector('.footer__link_up');

  // dropdown меню

  if (document.querySelector('.is-drop')) {
    const isDrop = document.querySelector('.is-drop');
    const dropDown = document.querySelector('.dropdown');
    const arrowIcon = document.querySelector('.arrow-icon');

    isDrop.addEventListener('click', () => {
      dropDown.classList.toggle('dropdown--active');
      arrowIcon.classList.toggle('arrow-icon--active');
    });

    document.addEventListener('click', (e) => {   
      if (!e.target.closest('.menu')) {
        //  если клик был не по menu, не по его дочерним элементам
        dropDown.classList.remove('dropdown--active');
        arrowIcon.classList.remove('arrow-icon--active');
      }
    });
  }
  
  // мобильное меню

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
  });

  menu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target && event.target.matches(".link-ancor")) {
      menu.classList.remove('menu--active');

      smoothScroll(event.target);
    } else if (!event.target.closest('.is-drop')) {
      window.location.href = event.target.getAttribute('href');
    }
  }); 
  
  footerLinkUp.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll(event.target.closest('.footer__link_up'));
    
  });

  footerMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target && event.target.matches(".link-ancor")) {
      smoothScroll(event.target);
    } else {
      window.location.href = event.target.getAttribute('href');
    }
  });

  // слайдер hero

  if (document.querySelector('.header__hero-slider')) {
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
  }

  // slider steps

  if (document.querySelector('.steps')) {
    let slider = $('.steps__inner');

    slider.slick({
      infinite: false,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow.svg" alt="left arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow.svg" alt="right arrow"></button>',
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();

        return 'этап ' + (i + 1);
      },
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 1180,
          settings: {
            arrows: false,
          }
        },
      ]
    });
  }

// reviews slider

if (document.querySelector('.reviews')) {
    let slider = $('.reviews__inner');

    slider.slick({
      infinite: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow.svg" alt="left arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow.svg" alt="right arrow"></button>',
      responsive: [
        {
          breakpoint: 680,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  }

// popup

const modalController = ({modal, btnOpen, btnClose, modalBtn, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  const modalButton = document.querySelector(modalBtn);

  modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = (event) => {
      const target = event.target;

      if (
        target === modalElem || 
        (btnClose && target.closest(btnClose))|| 
        event.code === 'Escape'
      ) {
        
        modalElem.style.opacity = 0;

        setTimeout(() => {
          modalElem.style.visibility = 'hidden';
        }, time);

        window.removeEventListener('keydown', closeModal);
      }
    };

    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;

      window.addEventListener('keydown', closeModal);
    };

    buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
    
    modalElem.addEventListener('click', closeModal);
    modalButton.addEventListener('click', closeModal);
    
};

if (document.querySelector('.modal1')) {
  modalController({
    modal: '.modal1',
    btnOpen: '.action__btn',
    btnClose: '.modal__close',
    modalBtn: '.modal__btn'
  });

  modalController({
    modal: '.modal1',
    btnOpen: '.contact__btn',
    btnClose: '.modal__close',
    modalBtn: '.modal__btn'
  });

  modalController({
    modal: '.modal1',
    btnOpen: '.call-link',
    btnClose: '.modal__close',
    modalBtn: '.modal__btn'
  });
}

if (document.querySelector('.modal2')) {
  modalController({
    modal: '.modal2',
    btnOpen: '.popular__btn',
    btnClose: '.modal__close',
    modalBtn: '.modal__btn'
  });

  modalController({
    modal: '.modal2',
    btnOpen: '.team__btn',
    btnClose: '.modal__close',
    modalBtn: '.modal__btn'
  });
}

// маска для телефона

const phones = document.querySelectorAll('input[type="tel"]');

const im = new Inputmask('+7 (999) 999-99-99');
im.mask(phones);

//  плавный скролл

function smoothScroll(selector) {
  const id = selector.getAttribute('href');

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
	});
}