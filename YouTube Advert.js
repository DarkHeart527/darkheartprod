let ytads = {
	videos: ['rjteBAIPnE0'], // Only use ids of the videos, for start time use ',' then seconds (rjteBAIPnE0,35)
	settings: {
		length: 30, // How long the video must play, use "full" to set as the entire video
		autoPlay: false, // No views are counted when true, Views counted when false because the user must press play
		playType: 'inline', // "random" to select r.andom videos, "inline" to cycle through (1 > 2 > 3)
		cover: true, // Cover the video with an invisible element upon playing (prevents button pressing)
		canMute: true, // The video can be muted
		timeShows: true, // Show the time of the ad
		timeFormat: '=current= / =duration=', // Choose the time format =current= shows the current time
		// =duration= shows the ad length or end
	},
	onTimeCompleted: '',
	watchTime: 0,
	interval: '',
	pause: function() {
		ytads.player.pauseVideo();
	},
	play: function() {
		ytads.player.playVideo();
	},
	current: 0, // Do not change this
	init: function(id, callback) {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		window.onYouTubePlayerAPIReady = function() {
			ytads.player = new YT.Player(id);
			if (typeof(callback) == 'function') {
				callback();
			}
			delete window.onYouTubePlayerAPIReady;
		}
		delete ytads.init;
	},
	covered: false, // Do not change this
	toggleCover: function() { // Please do not use this function as it may change the user experience
		if (!this.covered) {
			let el = document.createElement('div');
			el.id = 'cover';
			el.style.position = 'absolute';
			el.style.backgroundColor = 'transparent';
			window.cover = setInterval(function() {
				el.style.left = ytads.player.a.offsetLeft + 'px';
				el.style.top = ytads.player.a.offsetTop + 'px';
				el.style.width = ytads.player.a.width + 'px';
				el.style.height = ytads.player.a.height + 'px';
			});
			if (this.settings.canMute == true) {
				let mute = document.createElement('div');
				mute.attributes.muted = false;
				mute.onclick = function() {
					if (this.attributes.muted == false) {
						this.attributes.muted = true;
						ytads.player.mute();
					} else {
						this.attributes.muted = false;
						ytads.player.unMute();
					}
				}
				mute.innerHTML = 'mute';
				el.appendChild(mute);
			}
			if (this.settings.timeShows == true) {
				let time = document.createElement('div');
				time.id = 'time';
				time.innerHTML = `0 / ${this.settings.length}`;
				el.appendChild(time);
			}
			document.body.appendChild(el);
			this.covered = true;
		} else {
			document.getElementById('cover').outerHTML = '';
			clearInterval(cover);
			delete cover;
			this.covered = false;
		}
	},
	newVideo: function(videoId) {
		let video;
		if (!videoId) {
			if (this.settings.playType == 'random') {
				let current = Math.floor(Math.random() * this.videos.length); // Get a random video id
				video = this.videos[current];
				if (this.current == this.videos.length - 1 && this.current == current) {
					current--;
					video = this.videos[current];
				} else if (this.current == current && this.current != this.videos.length - 1) {
					current++;
					video = this.videos[current];
				}
				this.current = current;
			} else if (this.settings.playType == 'inline') {
				video = this.videos[this.current]; // Get the next video
				this.current++; // Add to the current tracker
				if (this.current == this.videos.length) {
					this.current = 0;
				}
				alert(video)
			} else {
				video = 'rjteBAIPnE0'; // If the type is written incorrectly, use my video and log an error
				console.error(`The type "${this.settings.playType}" is not valid`);
				return false;
			}
		} else {
				video = videoId;
		}
		window.start = video.split(',');
		video = start[0];
		window.start = start[1];
		let intEn = false;
		ytads.interval = setInterval( function() {
			if (ytads.covered == false) {
				if (ytads.player.getPlayerState() == 3) {
					if (ytads.settings.cover == true) {
						ytads.toggleCover();
					}
				}
			}
			if (ytads.player.getPlayerState() == 1 && !intEn) {
				clearInterval(ytads.interval);
				intEn = true;
				ytads.player.seekTo(Number(start));
			}
		}, 100);
		window.playint = setInterval( function() {
			if (ytads.player.getPlayerState() == 1 || ytads.player.getPlayerState() == 0) {
				if (ytads.settings.length != "full") {
					if (ytads.watchTime >= ytads.settings.length) {
						ytads.pause();
						clearInterval(playint);
						console.log("Specified Length");
						if (typeof(ytads.onTimeCompleted) == 'function') {
							ytads.onTimeCompleted();
						}
						if (ytads.settings.cover == true) {
							ytads.toggleCover();
						}
						ytads.watchTime = -1;
						delete playint;
					}
				} else if (ytads.settings.length == "full") {
					let dur = Math.floor(ytads.player.getDuration()) - 1;
					if (ytads.watchTime > dur) {
						ytads.pause();
						clearInterval(playint);
						console.log("Full Length");
						if (typeof(ytads.onTimeCompleted) == 'function') {
							ytads.onTimeCompleted();
						}
						if (ytads.settings.cover == true) {
							ytads.toggleCover();
						}
						ytads.watchTime = -1;
						delete playint;
					}
				}
				ytads.watchTime++;
				if (ytads.settings.timeShows == true) {
					/*let f = ytads.settings.timeFormat;
					// Check for current
					let g = f.split('=current=');
					for (let i = 0; i < g.length; i++) {
						
					}*/
					if (document.getElementById('time') != undefined) {
						document.getElementById('time').innerHTML = `${ytads.watchTime} / ${ytads.settings.length}`;
					}
				}
			}
		}, 1000);
		this.player.cueVideoById({'videoId': video,
              'suggestedQuality': 'medium'});
	},
	player: '',
}
console.log('YouTube Advert by DarkHeart Productions is now running, version: 2.0.0');
