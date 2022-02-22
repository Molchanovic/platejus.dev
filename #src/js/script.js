
// Бургер
if (document.querySelector('.burger-menu')) {
	(function () {
		// let burger = document.querySelector('.header__burger');
		let header = document.querySelector('.header');
		let burger = document.querySelector('.burger-menu');
		// let body = document.querySelector('.body');
		burger.addEventListener('click', () => {
			// burger.classList.toggle('header__burger_active');
			header.classList.toggle('header_active');
			// body.classList.toggle('overflow-h');
			burger.classList.toggle('burger-menu_active');
		})
	}());
};



const swiperOne = new Swiper('.sliderOne', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 25,
	loop: false,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination-one',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.slider-next-one',
	  prevEl: '.slider-back-one',
	},

	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
	}
  });


  const swiperTwo = new Swiper('.sliderTwo', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 25,
	loop: false,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination-two',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.slider-next-two',
	  prevEl: '.slider-back-two',
	},

	breakpoints: {
		767: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
	}
  });









//===Модули===============================
@@include('../../../_module/JS/_modal.js', {}) //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

