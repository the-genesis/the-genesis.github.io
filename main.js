var navIcon = document.getElementById("nav-icon");
var navIconContainer = document.querySelector(".nav-icon-container");
var navIconTop = document.querySelector(".nav-icon-top");
var navIconBottom = document.querySelector(".nav-icon-bottom");
var sidenav = document.querySelector(".sidenav-container");
var wrapper = document.querySelector(".wrapper");
var overlay = document.getElementById("overlay");

var sidenavIsOpen = false;
var scrollPos = 0;
var scrollDirection = "not scrolled yet";

navIcon.addEventListener("click", function() {
	let cls = navIcon.getAttribute("class");

	if (cls === "not-hover") {
		openSidenav();
	}
	else {
		closeSidenav();
	}
});

function openSidenav() {
	navIcon.className = "on-hove";
	navIconTop.classList.add("top-clicked");
	navIconBottom.classList.add("bottom-clicked");

	sidenav.classList.add("sidenav-out");
	wrapper.classList.add("wrapper-alt");

	overlay.style.display = "block";

	sidenavIsOpen = true;
}

function closeSidenav() {
	navIcon.className = "not-hover";
	navIconTop.classList.remove("top-clicked");
	navIconBottom.classList.remove("bottom-clicked");

	sidenav.classList.remove("sidenav-out");
	wrapper.classList.remove("wrapper-alt");

	overlay.style.display = "none";

	sidenavIsOpen = false;
}

window.onclick = function(event) {
	if(sidenavIsOpen && event.target == overlay) {
		closeSidenav();
	}
}
//make navicon scroll out when page is being scrolled down, 
//and scroll in when page is being scrolled down.



window.addEventListener("scroll", function() {
	if((document.body.getBoundingClientRect()).top > scrollPos) {
		scrollDirection = "up";
	}
	else {
		scrollDirection = "down";
	}

	scrollPos = (document.body.getBoundingClientRect()).top;
/*
	if(scrollDirection == "down") {
		navIconContainer.style.position = "absolute";
	}
	else {
		navIconContainer.style.position = "fixed";
	}
*/
});



