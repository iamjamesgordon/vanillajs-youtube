//    This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var banner = document.querySelector("#hero-banner");
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

//   The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  playPauseVid();
  stopVideo();
}

//    The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
	setTimeout(stopVideo, 6000);
	done = true;
  }
}

function stopVideo() {
	document.querySelector("#y-t-stop").onclick = function() {
		player.stopVideo();
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
