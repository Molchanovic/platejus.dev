
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

//! Пагинация 
if (document.querySelector('.paginations')) {
	let pagBtns = document.querySelectorAll('.paginations__arrow-btn');
	pagBtns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			btn.classList.add('paginations__arrow-btn_active');
			setTimeout(function () {
				btn.classList.remove('paginations__arrow-btn_active');
			}, 400);
		})
	});
}

function addHover(myBtn) {
	myBtn.classList.add('slider-arrow_active');
	setTimeout(function () {
		myBtn.classList.remove('slider-arrow_active');
	}, 200);
}

//! Поиск
if (document.querySelector('.base-search')) {
	let searchInput = document.querySelector('.base-search__input');
	let opacityBack = document.querySelector('.base-search__block-back');
	let searchBlock = document.querySelector('.base-search__block');

	searchInput.addEventListener('click', function () {
		searchInput.classList.add('base-search__input_active');
		opacityBack.classList.add('base-search__block-back_active');
		searchBlock.classList.add('base-search__block_active');
	})

	opacityBack.addEventListener('click', function () {
		searchInput.classList.remove('base-search__input_active');
		opacityBack.classList.remove('base-search__block-back_active');
		searchBlock.classList.remove('base-search__block_active');
	})
}

//! Кол-во букв в textarea
if (document.querySelector('.textarea-block')) {
	let textareaBlock = document.querySelectorAll('.textarea-block');
	textareaBlock.forEach(function (input) {
		let spanBlock = input.querySelector('span');
		input.querySelector('textarea').addEventListener('input', function (event) {
			console.log(`${event.target.value.length}/${+(event.target.getAttribute('data-max'))}`);
			spanBlock.innerHTML = `${event.target.value.length}/${+(event.target.getAttribute('data-max'))}`
		});
	})
}

if (document.querySelector('form')) {
	let formsValidate = document.querySelectorAll('form');

	formsValidate.forEach(function (item) {
		item.querySelectorAll('.input').forEach(function (input) {
			input.addEventListener('focusout', function () {
				if (input.value.length == 0) {
					input.classList.add('input-filled');
				}
				else {
					input.classList.remove('input-filled');
				}
			})

			// input.addEventListener('input', function () {

			// })

			// item.querySelector('button').addEventListener('click', function () {
			// 	if (input.value.length == 0) {
			// 		input.classList.add('input-filled');
			// 	}
			// })
		})
	})
}










//===Модули===============================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}



function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click" , function (e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnLock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if(doUnLock) {
			bodyUnLock();
		}
	}
}



function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPaddingValue.length > 0){
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	 body.style.paddingRight = lockPaddingValue;
	 body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function (){
		if (lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function (){
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e){
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});



(function(){
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css){
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function(){
	if (!Element.prototype.matches){
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})(); //Модальное окно  //!Сниппет "!modal" html
//@//@include('../../../_module/JS/_tooltip.js', {}) //Тултип  //!Сниппет "!tooltip" html
//@//@include('../../../_module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
if (document.getElementsByClassName("accordion")) {
	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("accordion_active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}
 //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf("_");
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}";
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type === "blur" && this.value.length < 5) {
			this.value = "";
		}

	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}
	
}

// use

// maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__'); //Маска номера телефона (библиотека)
	maskPhone('.tel');//Вызов функции маски номера телефона
}

