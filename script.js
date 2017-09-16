// JavaScript Document

window.onload = function() {
	
	////////////////////////////////////
	// Navbar animations
	///////////////////////////////////
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
	
	////////////////////////////////////
	// Image swap animations
	///////////////////////////////////	
	
	setTimeout(imgSwap, 1000);

	function imgSwap() {	
	
		setInterval(function() {
	
			var images = document.querySelectorAll(".i-g-img");
					
			var i1 = Math.floor(Math.random() * images.length);
			var i2 = Math.floor(Math.random() * images.length);
			
			if(i1 === i2) {
				i1 += 1;	
			}
			
			// alert(i1 + " " + i2);
			
			var image1Src = images[i1].getAttribute("src");
			var image2Src = images[i2].getAttribute("src");
			
			images[i1].classList.add("active");
			images[i1].src = image2Src;
			images[i2].classList.add("active");
			images[i2].src = image1Src;		
			
			setTimeout(function() {
				
				images[i1].classList.remove("active");
				images[i2].classList.remove("active");
				
			}, 500);
			
		}, 2500);
			
	} // Imgswap fucntion	
	
	////////////////////////////////////
	// Slide Out Animations
	///////////////////////////////////	
	
	window.addEventListener('scroll', slideAnimations);
	
	function slideAnimations() {
		
		var slides = document.querySelectorAll(".slide");	
		
		var i;
		for(i = 0; i < slides.length; i++) {
		
			if(window.scrollY >= slides[i].parentElement.offsetTop - 300) {
			
				slides[i].classList.add("active");
			
			} else {
				
				slides[i].classList.remove("active");	
				
			}//End if function
			
		} // End for loop
		
	} // Slide Animations
					
}; // Window Onload //////////////////