if (document.getElementsByClassName("accordion")) {
	let acc = document.querySelectorAll(".accordion");

	acc.forEach(function (item) {
		let arrowAcc = item.querySelector('.baseknow-sitebar__block-active');
		arrowAcc.addEventListener('click', function () {
			item.classList.toggle("accordion_active");
		let arrowTrangle = item.querySelector('.baseknow-sitebar__item-triangle');
			arrowTrangle.classList.toggle("baseknow-sitebar__item-triangle_active");
			let panel = item.nextElementSibling;

			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	})
}

// 	for (i = 0; i < acc.length; i++) {
// 		acc[i].addEventListener("click", function () {
// 			this.classList.toggle("accordion_active");
// 			let panel = document.getElementsByClassName("panel");
// 			if (panel.style.maxHeight) {
// 				panel.style.maxHeight = null;
// 			} else {
// 				panel.style.maxHeight = panel.scrollHeight + "px";
// 			}
// 		});
// 	}
// }
