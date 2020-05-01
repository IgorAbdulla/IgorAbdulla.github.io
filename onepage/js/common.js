"use strict";

window.addEventListener("load", function () {



// faq

	let question = document.querySelector(".questions");

	question.addEventListener("click", function(e) {
		e.preventDefault();
		if(!e.target.closest(".show-answer")) return

			let parent = e.target.closest(".questions__item");
		let answer = parent.querySelector(".questions__item-content");
		answer.classList.toggle("_visable")
	})


});