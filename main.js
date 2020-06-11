var navIcon = document.getElementById("nav-icon");
var navIconTop = document.querySelector(".nav-icon-top");
var navIconBottom = document.querySelector(".nav-icon-bottom");
var sidenav = document.querySelector(".sidenav-container");
var wrapper = document.querySelector(".wrapper");

function toggle() {
	let cls = navIcon.getAttribute("class");

	if (cls === "not-hover") {
		openSidenav();
	}
	else {
		closeSidenav();
	}
}

function openSidenav() {
	navIcon.className = "on-hove";
	navIconTop.classList.add("top-clicked");
	navIconBottom.classList.add("bottom-clicked");

	sidenav.classList.add("sidenav-out");
	wrapper.classList.add("wrapper-alt");
}

function closeSidenav() {
	navIcon.className = "not-hover";
	navIconTop.classList.remove("top-clicked");
	navIconBottom.classList.remove("bottom-clicked");

	sidenav.classList.remove("sidenav-out");
	wrapper.classList.remove("wrapper-alt");
}


window.onclick = function(event) {
	if(event.target == sidenav) {
		closeSidenav();
		//fix this so that sidenav would be closed when clicked outside.
	}
}

//make navicon scroll out when page is being scrolled down, 
//and scroll in when page is being scrolled down.

navIcon.addEventListener("click", toggle);