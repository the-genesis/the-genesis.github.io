var navIcon = document.getElementById("nav-icon");
var navIconTop = document.querySelector(".nav-icon-top");
var navIconBottom = document.querySelector(".nav-icon-bottom");
var sidebar = document.querySelector(".sidebar");

function change() {
	let clsee = navIcon.getAttribute("class");

	if (clsee === "not-hover") {
		navIcon.className = "on-hove";
		navIconTop.classList.add("top-clicked");
		navIconBottom.classList.add("bottom-clicked");

		sidebar.classList.add("sidebar-out");
	}
	else {
		navIcon.className = "not-hover";
		navIconTop.classList.remove("top-clicked");
		navIconBottom.classList.remove("bottom-clicked");

		sidebar.classList.remove("sidebar-out");
	}

}

navIcon.addEventListener("click", change);