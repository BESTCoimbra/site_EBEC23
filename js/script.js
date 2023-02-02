(function () {
	"use strict";
	//===== Prealoder =====
	var loader = document.querySelector(".loader")
	window.addEventListener("load",vanish);
	function vanish() {
		loader.classList.add("disappear");
	}
})();

function menuOpen() {
	var navbarPhone = document.querySelector('.options-phone');
	if (navbarPhone.style.display === 'grid'){			
		navbarPhone.style.display='none';
	}
	else {												
		navbarPhone.style.display='grid';
	}
}

function desativateOpenResponses(id) {
	var response = document.querySelector('.response-'+id);
	var question = document.querySelector('.question-'+id);
	var seta = document.querySelector('.seta-'+id);

	response.style.maxHeight = "0";
	response.style.padding = "0 35px"
	question.style.backgroundColor = "white"
	seta.style.boxShadow = "2px -2px 0 0.5px var(--orange-visualidentityorange) inset"
	seta.style.transform = "rotate(-45deg)"
}

function openResponse(id) {
	var response = document.querySelector('.response-'+id);
	var question = document.querySelector('.question-'+id);
	var seta = document.querySelector('.seta-'+id);

	for (let i=1; i<=7; ++i) {		//fecha as respostas que estão abertas
		if (id != i) {desativateOpenResponses(i)}
	}

	if (response.style.maxHeight === '300px'){			// esta aberto 
		response.style.maxHeight = "0";
		response.style.padding = "0 35px"
		question.style.backgroundColor = "white"
		seta.style.boxShadow = "2px -2px 0 0.5px var(--orange-visualidentityorange) inset"
		seta.style.transform = "rotate(-45deg)"
	}
	else {												// esta fechado 
		response.style.maxHeight = "300px"
		response.style.padding = "20px 35px"
		question.style.backgroundColor = "var(--orange-visualidentityorange)"
		seta.style.boxShadow = "2px -2px 0 0.5px white inset"
		seta.style.transform = "rotate(135deg)"
	}


}

function openDropdownResponse() {
	var response = document.querySelector('.dropdown');

	if (response.style.display === 'flex'){			
		response.style.display='none';
	}
	else {												
		response.style.display='flex';
	}


}

function pyramidresponse(idp){
	if(idp==1){
	onclick=document.getElementById('text1').style.display='none';
	document.getElementById('text2').style.display='block';
	document.getElementById('button1').style.backgroundColor='black';
	document.getElementById('button2').style.backgroundColor='white';
	}
	else{
		onclick=document.getElementById('text2').style.display='none';
		document.getElementById('text1').style.display='block';
		document.getElementById('button2').style.backgroundColor='black';
		document.getElementById('button1').style.backgroundColor='white';
	}
}