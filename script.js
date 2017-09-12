// JavaScript Document

window.onload = function() {
	
	// Navbar animations
	
	document.querySelector("#m-s-hamburger").onclick = function() {
		
		if(this.className !== "active") {
						
			this.classList.add("active");
			document.querySelector("#main-sidebar").classList.add("active");
			document.querySelector("ul#m-s-nav").classList.add("active");
			setTimeout(navLinksEffect, 500);
							
		} else {
			
			this.classList.remove("active");
			setTimeout(function() {
				document.querySelector("#main-sidebar").classList.remove("active");
			}, 500);
			document.querySelector("ul#m-s-nav").classList.remove("active");			
			navLinksEffect();			
							
		}
		
	};
	
	
	function navLinksEffect() {
		
		var navLinks = document.querySelectorAll("ul#m-s-nav li");
		var i;
		
		if( document.querySelector("ul#m-s-nav").className === "active" ) {
			
			for(i = 0; i < navLinks.length; i++) {
				
				navLinks[i].style.opacity = 1;
				
			}
			
		} else {
			
			for(i = 0; i < navLinks.length; i++) {
				
				navLinks[i].style.opacity = 0;
				
			}
			
		}
		
	} // navLinksEffects
		
}; // Window Onload //////////////////