
// !Бургер
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


// ! Счетчик 

if (document.querySelector('.manage-income__row')) {
	let wrapperSelect = document.querySelectorAll('.manage-income__row');
	

	wrapperSelect.forEach(function (wrapper) {

		let allWrapper = wrapper.querySelectorAll('.manage-income__range');
		allWrapper.forEach(function (range) {
			let counter = range.querySelector('.manage-income__slider');
			let counterOne = wrapper.querySelector('#counter-one');
			let counterTwo = wrapper.querySelector('#counter-two');
			let counterThree = wrapper.querySelector('#counter-three');
			let NumOne = wrapper.querySelector('#range-num-one');
			let NumTwo = wrapper.querySelector('#range-num-two');
			let NumThree = wrapper.querySelector('#range-num-three');
			// Первый ползунок, цифра снизу
			counterOne.addEventListener('input', function () {
				NumOne.style.left = (counterOne.value / 10) - 13 + '%';
				NumOne.innerHTML = counterOne.value + ' чел.';
			});
			// Второй ползунок, цифра снизу
			counterTwo.addEventListener('input', function () {
				NumTwo.style.left = (counterTwo.value / 100) - 12  + '%';
				NumTwo.innerHTML = counterTwo.value + ' ₽';
			});
			// Третий ползунок, цифра снизу
			counterThree.addEventListener('input', function () {
				NumThree.style.left = (counterThree.value) - 2 + '%';
				NumThree.innerHTML = counterThree.value + ' %';
			});
			// Общая сумма
			counter.addEventListener('input', function () {
				let resultSum = wrapper.querySelector('#sum-result');
				let summ = counterOne.value * counterTwo.value * counterThree.value / 100 ;

				finalSumm = summ.toLocaleString() + ' ₽';

				resultSum.innerHTML = finalSumm;
			});

		});
	});
}

// ! Липкая шапка 
if (document.querySelector('.header')) {
	let headerMove = document.querySelector('.header');

	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			headerMove.classList.add('header_move');
			console.log ('sdksdfn');
		}
		
	
		else {
			headerMove.classList.remove('header_move');
		}
	} )
	
	

}




		// let rageOne = wrapper.querySelector('#range-num-one');
		// countOne = rageOne.querySelector('.manage-income__slider');
		// countOne.addEventListener('input', function () {
		// 	rageOne.querySelector('.manage-income__range-num').style.left = (countOne / 10) - 10 + '%';
		// });


// 		// let rageTwo = wrapper.querySelector('#range-num-one');
// 		// let rageThree = wrapper.querySelector('#range-num-one');
		
// 		// rageTwo.querySelector('.manage-income__range-num').style.left = (counterTwo / 10) - 10 + '%';
// 		// rageThree.querySelector('.manage-income__range-num').style.left = (counterThree / 10) - 10 + '%';



// ! Слайдеры

if (document.querySelector('.slider-cases__slider-block')) {
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
				spaceBetween: 25,
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
				spaceBetween: 25,
			},
		}
	  });
	
	
}








//===Модули===============================
@@include('../../../_module/JS/_modal.js', {}) //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
//@//@include('../../../_module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	//@//@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	//maskPhone('.tel');//Вызов функции маски номера телефона
}

