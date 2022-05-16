window.onscroll = function () {
	scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector('.logo').style.height = '5vh'
		document.querySelector('.navbar-nav').style.fontSize = '1.7rem'
	} else {
		document.querySelector('.logo').style.height = '10vh'
		document.querySelector('.navbar-nav').style.fontSize = '2rem'
	}
}
