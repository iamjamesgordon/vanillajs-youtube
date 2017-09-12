//    This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('hero-banner-iframe', {
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
		setInterval(videoScroll, 10);
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

function videoScroll() {
	
	var heroBottom = document.querySelector("#hero-banner").offsetHeight;
	
	var i = 0;
	
	while(i < 6) {
		
		i++;
		
		if ( i === 5 ) {
			break;	
		} else {
			alert(i);	
		}

	}
	
	
}