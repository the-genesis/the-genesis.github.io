var navIcon = document.getElementById("nav-icon");
var navIconTop = document.querySelector(".nav-icon-top");
var navIconBottom = document.querySelector(".nav-icon-bottom");
var sidenav = document.querySelector(".sidenav-container");
var wrapper = document.querySelector(".wrapper");

function change() {
	let clsee = navIcon.getAttribute("class");

	if (clsee === "not-hover") {
		navIcon.className = "on-hove";
		navIconTop.classList.add("top-clicked");
		navIconBottom.classList.add("bottom-clicked");

		sidenav.classList.add("sidenav-out");
		wrapper.classList.add("wrapper-alt");
	}
	else {
		navIcon.className = "not-hover";
		navIconTop.classList.remove("top-clicked");
		navIconBottom.classList.remove("bottom-clicked");

		sidenav.classList.remove("sidenav-out");
		wrapper.classList.remove("wrapper-alt");
	}

}

navIcon.addEventListener("click", change);

/*
navIcon.addEventListener("mouseover", function() {
	navIconBottom.style.width = "30px";
});
navIcon.addEventListener("mouseleave", function() {
	navIconBottom.style.width = "30px";
});
*/