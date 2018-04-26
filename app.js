console.info(`Hello! I see that you are peeking through the console... and the code. Unfortunatly, that is NOT how you get the beats. Anyway, since you're here, you should talk to me about collaborating with me in music production or website development. \nContact me at darkheartprod@gmail.com\n `);

let app = {
	tracks: {
		'Don\'t Play (Preview)': {
			source: 'dontplay_preview.mp3',
			description: 'This was made at the top of my head, fire, yet simple. Note that this is only a preview (or teaser).',
			releaseDate: '4 - 24 - 2018',
		},/*
		'121': {
			source: '121.mp3',
			description: 'None',
			releaseDate: 'Unknown',
		},
		'Nearly Nothing': {
			source: 'Nearly Nothing.mp3',
			description: 'None',
			releaseDate: 'Unknown',
		},
		'E.Z. Lop Les': {
			source: 'E.Z. Lop Les.mp3',
			description: 'None',
			releaseDate: 'Unknown',
		},
		'In Your Head': {
			source: 'In Your Head.mp3',
			description: 'None',
			releaseDate: 'Unknown',
		},*/
	},
	path: 'tracks/',
	openFile: function(file) {
		console.log(`Opening the file ${file}\n `);
		// Set up a progress bar (Would love a canvas progress bar [nice looking!])
		clearInterval(this.pBarInt)
		this.audio.src = this.path + file;
		this.audio.onloadedmetadata = function() {
			let pBar = document.getElementById('progress');
			let time = document.getElementById('time');
			this.pBarInt = setInterval( function() {
				let cTime = Math.floor(app.audio.currentTime); // Remove Fractions
				let minute = 0;
				let second = cTime;
				for (let i = 0; i < Math.floor(second)/60 - 1; i++) {
					minute++;
					second -= 60;
				}
				console.log(cTime);
				if (second < 10) {
					second = '0' + second;
				}
				time.innerHTML = `${minute}:${second}`;
				
				pBar.style.width = (app.audio.currentTime / app.audio.duration) * 100 + '%';
			}, 50);
			this.play();
		}
	},
	pBarInt: '',
	play: function() {
		this.audio.play();
	},
	pause: function() {
		this.audio.pause();
	},
	restartSong: function() {
		this.audio.currentTime = 0;
	},
	previousTrack: function() {
		if (!dblClickTrue) {
			dblClick = setTimeout( function() {
				dblClickTrue = false;
			}, 1000);
		}
		if (!dblClickTrue) {
			this.restartSong();
		} else if (dblClickTrue) {
			// Previous Track
			this.currentTrack--;
		}
		dblClickTrue = true;
	},
	currentTrack: 0,
	dblClick: '',
	dblClickTrue: false,
	nextTrack: function() {
		this.currentTrack++;
	},
	audio: '',
	init: function() {
		this.audio = new Audio();
		this.audio.autoPlay = true;
		this.audio.onended = function() {
			app.nextTrack();
		}
	}
}

window.onload = function() { // Make sure to start the program AFTER the page loads
	for (let i = 0; i < app.tracks.length(); i++) {
		let trackName = app.tracks.keys()[i];
		let track = app.tracks[trackName];
		let source = track.source;
		let trackDesc = track.description;
		let trackRelease = track.releaseDate;
		
		let trackEl = document.createElement('div');
		trackEl.className = 'track';
		trackEl.innerHTML = trackName;
		trackEl.onclick = function() {
			app.openFile(source);
			document.getElementById('trackTitle').innerHTML = trackName;
			document.getElementById('releaseDate').innerHTML = 'Release: ' + trackRelease;
			document.getElementById('description').innerHTML = trackDesc;
		}
		document.getElementsByClassName('trackList')[0].appendChild(trackEl);
	}
	
	let searchInput = document.getElementById('searchTracks');
	searchInput.onkeyup = function() {
		var searchTerm, val, tracksEx, found;
		found = 0;
		val = this.value.toUpperCase();
		tracksEx = document.getElementsByClassName('track');
		for (let j = 0; j < tracksEx.length; j++) {
			if (document.getElementById('searchBy').value == 'name') {
				searchTerm = tracksEx[j].innerHTML.toUpperCase().indexOf(val);
			} else if (document.getElementById('searchBy').value == 'release') {
				searchTerm = app.tracks[tracksEx[j].innerHTML].releaseDate.toUpperCase().indexOf(val);
			} else if (document.getElementById('searchBy').value == 'featured') {
				//searchTerm = app.tracks[tracksEx[j].innerHTML].releaseDate.toUpperCase().indexOf(val);
			}
			if (searchTerm > -1) {
				tracksEx[j].style.display = 'block';
				document.getElementById('noResults').style.display = 'none';
				found++;
			} else {
				tracksEx[j].style.display = 'none';
				if (found <= 0) {
					document.getElementById('noResults').style.display = 'block';
				}
			}
		}
	}
	document.getElementById('searchBy').onchange = function() {
		searchInput.onkeyup(); // Search Again When The Filter Is Changed
	}

	app.init();
}