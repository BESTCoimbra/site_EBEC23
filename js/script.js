(function () {
	"use strict";
	//===== Prealoder =====
	var loader = document.querySelector(".loader")
	window.addEventListener("load",vanish);
	function vanish() {
		loader.classList.add("disappear");
	}
})();

function openResponse(id) {
	var response = document.querySelector('.response-'+id);
	var question = document.querySelector('.question-'+id);
	var seta = document.querySelector('.seta-'+id);
	if (response.style.display === 'block'){
		response.style.display = "none";
		question.style.backgroundColor = "white"
		seta.style.boxShadow = "2px -2px 0 0.5px var(--orange-visualidentityorange) inset"
		seta.style.transform = "rotate(-45deg)"
	}
	else {
		response.style.display = "block"
		question.style.backgroundColor = "var(--orange-visualidentityorange)"
		seta.style.boxShadow = "2px -2px 0 0.5px white inset"
		seta.style.transform = "rotate(135deg)"
	}
}