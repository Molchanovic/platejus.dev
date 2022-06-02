
// !Бургер
if (document.querySelector('.burger-menu')) {
	(function () {
		// let burger = document.querySelector('.header__burger');
		let header = document.querySelector('.header');
		let burger = document.querySelector('.burger-menu');
		let body = document.body;
		// let body = document.querySelector('.body');
		burger.addEventListener('click', () => {
			// burger.classList.toggle('header__burger_active');
			header.classList.toggle('header_active');
			body.classList.toggle('body_hidden');
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
				NumTwo.style.left = (counterTwo.value / 100) - 12 + '%';
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
				let summ = counterOne.value * counterTwo.value * counterThree.value / 100;

				finalSumm = summ.toLocaleString() + ' ₽';

				resultSum.innerHTML = finalSumm;
			});

		});
	});
}

// ! Куки
if (document.querySelector('.block-cookies')) {
	let cookiesBlock = document.querySelector('.block-cookies');
	let cookiesBtn = document.querySelector('.block-cookies__btn');
	let cookiClose = document.querySelector('.block-cookies__close');
	let cookiTextBlock = document.querySelector('.block-cookies__block-text');
	let cookiTitle = document.querySelector('.block-cookies__text');
	let cookiRow = document.querySelector('.block-cookies__row');


	cookiTitle.addEventListener('click', function () {
		cookiTextBlock.classList.add('block-cookies__block-text_active');
		cookiClose.classList.add('block-cookies__close_active');
		cookiRow.classList.add('block-cookies__row_active');
		cookiTitle.innerHTML = `ПОЛИТИКА В ОТНОШЕНИИ ФАЙЛОВ "COOKIES"`;
	});

	cookiClose.addEventListener('click', function () {
		cookiTextBlock.classList.remove('block-cookies__block-text_active');
		cookiClose.classList.remove('block-cookies__close_active');
		cookiRow.classList.remove('block-cookies__row_active');
		cookiTitle.innerHTML = `МЫ ИСПОЛЬЗУЕМ КУКИ. <a class="block-cookies__link" href="##">ЧТО ЭТО ЗНАЧИТ?</a> `;
	});

	cookiesBtn.addEventListener('click', function () {
		cookiesBlock.classList.add('block-cookies_close')
	})
}

// ! Слайдеры
if (document.querySelector('.slider-cases__slider-block')) {

	let myBtns = document.querySelectorAll('.slider-arrow');
	let rightArrow = document.querySelectorAll('.right-arrow');
	let leftArrow = document.querySelectorAll('.left-arrow');

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
		},
	});
	rightArrow.forEach(function (right) {
		leftArrow.forEach(function (left) {
			swiperChange(swiperOne, right, left);
			swiperChange(swiperTwo, right, left);
		})
	});


	function swiperChange(swiperName, rightClass, leftClass) {
		swiperName.on("slideChange", function () {
			if (
				this.previousIndex < this.activeIndex ||
				this.slides - 1 == this.previousIndex
			) {
				addHover(rightClass);

			} else {
				addHover(leftClass);
			}
		});
	}

	myBtns.forEach(function (btn) {

		btn.addEventListener('click', addHover(btn));

	});

	function addHover(myBtn) {

		myBtn.classList.add('slider-arrow_active');
		setTimeout(function () {
			myBtn.classList.remove('slider-arrow_active');
		}, 200);
	}

}

//! Прелоадер
if (document.querySelector('.preloader')) {
	window.onload = function () {
		setTimeout(() => {
			document.body.classList.add('loaded_hiding');
			window.setTimeout(function () {
				document.body.classList.add('loaded');
				document.body.classList.remove('loaded_hiding');
			}, 1000);
		}, 500);
	}
}

//! Проверка чекеда у кнопки
if (document.querySelector('.base-popup')) {
	let btnSend = document.querySelector('.base-popup__btn');
	let inputPopup = document.querySelector('#checkbox-base');

	inputPopup.addEventListener('click', function () {
		if (inputPopup.checked) {
			btnSend.classList.remove('base-popup__btn_disable');
		}
		else {
			btnSend.classList.add('base-popup__btn_disable');
		}
	})
}








//===Модули===============================
@@include('../module/JS/_modal.js', {}) //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
@@include('../module/JS/_accordion.js', {}) //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	@@include('../../../_module/JS/_maskPhone.js', {}) //Маска номера телефона (библиотека)
	maskPhone('.tel');//Вызов функции маски номера телефона
}

