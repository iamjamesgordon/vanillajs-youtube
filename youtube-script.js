//    This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('y-t-hero-banner-iframe', {
	height: '390',
	width: '640',
	videoId: 'yBHx7_bkWv0',
	playerVars: {
        'autoplay': 1,
        'controls': 0, 
        'autohide': 1,
        'showinfo' : 0, // <- This part here
        'wmode': 'opaque',
        'rel': 0,
        'loop': 1
    },
	events: {
	  'onReady': onPlayerReady,
	  'onStateChange': onPlayerStateChange
	}
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  playPauseVid();
}


// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {

	if (event.data == YT.PlayerState.ENDED) {
		document.querySelector("#y-t-play-pause").classList.remove("active");
		document.querySelector("#y-t-play-pause").innerHTML = "Play";
		ytHeroBannerFadeOut();
		atHeroBannerFadeIn();
	}
	
}

function playPauseVid() {
	
	document.querySelector("#y-t-play-pause").onclick = function() {	
	
		if(this.className !== "active") {	
			player.pauseVideo();
			this.classList.add("active");
			this.innerHTML = "Play";
		} else {
			player.playVideo();
			this.classList.remove("active");
			this.innerHTML = "Pause";
		}
		
	};
	
}

function ytHeroBannerFadeOut() {
	document.querySelector("#y-t-hero-banner").style.opacity = 0;
}

function atHeroBannerFadeIn() {

		var atHeroBanner = document.querySelector("#at-hero-banner");
		var h1 = document.querySelector("#at-hero-banner h1");
		var h2 = document.querySelector("#at-hero-banner h2");
		var icon = document.querySelector("#at-hero-banner i");

		setTimeout(function(){
		
			atHeroBanner.style.opacity = 1;
	
				setTimeout(function(){
			
					h1.style.opacity = 1;
			
						setTimeout(function() {
				
							h2.style.opacity = 1;

								setTimeout(function() {
				
									icon.style.opacity = 1;
				
								}, 700);
				
						}, 700);
			
				}, 500);
	
		}, 10);	

	}