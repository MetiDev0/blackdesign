/* Preloader */
let counting = setInterval(function () {
	let loader = document.getElementById("percentage");
	let currval = parseInt(loader.innerHTML);
	let Width = 99 - currval;
	let loadscreen = document.getElementById("loader-progress");
	loader.innerHTML = ++currval;
	if (currval > 89){
		loader.innerHTML = 90;
		if(window.jQuery) {
			//console.log('jquery loaded');
			loader.innerHTML = 95;
			if(document.readyState == "interactive") {
				loader.innerHTML = 99;
			}
			if(document.readyState == "complete") {
				//console.log('fully loaded!');
				clearInterval(counting);
				loader.innerHTML = 100;
				jQuery("body").toggleClass('page-loaded');
				setTimeout(function() {
					jQuery('nav').css('visibility','visible')
				}, 880);
			}
		}
	} 
	
	loadscreen.style.transition = "0.3s";
	loadscreen.style.width = Width + "%";
}, 20);

/* NAV */
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56)  {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});
