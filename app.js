(function() {
console.info(`Hello! I see that you are peeking through the console... and the code. Unfortunatly, that is NOT how you get the beats. Anyway, since you're here, you should talk to me about collaborating with me in music production or website development. \nContact me at darkheartprod@gmail.com\n `);

let app = {
	tracks: { /* Please note that tracks that start with a number must be at the top */
		'121': {
			source: '121.mp3',
			releaseDate: 'Unknown',
			description: '',
			fireRating: '3',
		},
		'Locking Bars': {
			source: 'Locking Bars.mp3',
			description: 'You might just like it! Made with lots of bass and drums with an agressive synth.',
			releaseDate: '5 - 6 - 2018',
			fireRating: '5',
		},
		'Ooh Boi': {
			source: 'oohboi.mp3',
			description: 'Few hours to make, little edit the next day.',
			releaseDate: '5 - 4 - 2018',
			fireRating: '5',
		},
		'Don\'t Play': {
			source: 'dont play.mp3',
			description: 'This was made at the top of my head, fire, yet simple.',
			releaseDate: '4 - 30 - 2018',
			fireRating: '5',
		},
		'Don\'t Play (Preview)': {
			source: 'dontplay_preview.mp3',
			description: 'This was made at the top of my head, fire, yet simple. Note that this is only a preview (or teaser).',
			releaseDate: '4 - 24 - 2018',
			fireRating: 'Not rated',
		},
		'Melted Mixtape': {
			source: 'Melted Mixtape.mp3',
			description: 'This is fire, I made this in only ONE day, actually a few hours, the synths were made by accident (made it but not intended to sound like it does) and just went with it.',
			releaseDate: '3 - 10 - 2018',
			fireRating: '5',
		},
		'Celeste': {
			source: 'Celeste.mp3',
			releaseDate: '1 - 7 - 2018',
			description: '',
			fireRating: '4',
		},
		'Money': {
			source: 'Money.mp3',
			releaseDate: '12 - 15 - 2017',
			description: '',
			fireRating: '3',
		},
		'Chaotic': {
			source: 'Chaotic.mp3',
			releaseDate: '2 - 7 - 2018',
			description: '',
			fireRating: '3',
		},
		'Finally': {
			source: 'Finally.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'Flames': {
			source: 'Flames.mp3',
			releaseDate: '',
			description: '',
			fireRating: '3',
		},
		'E.Z. Lop Les': {
			source: 'E.Z. Lop Les.mp3',
			releaseDate: '',
			description: '',
			fireRating: '4',
		},
		'Death': {
			source: 'Death.mp3',
			releaseDate: '',
			description: '',
			fireRating: '3',
		},
		'Chill': {
			source: 'Chill.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'Flute': {
			source: 'Flute.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'In Your Head': {
			source: 'In your head.mp3',
			releaseDate: '2 - 9 - 2018',
			description: '',
			fireRating: '3',
		},
		'Life Is Life': {
			source: 'Life Is Life.mp3',
			releaseDate: '',
			description: '',
			fireRating: '1',
		},
		'Lil Happy': {
			source: 'Lil Happy.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'Mass': {
			source: 'Mass.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'Nearly Nothing': {
			source: 'Nearly Nothing.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'Too Late': {
			source: 'Too Late.mp3',
			releaseDate: '',
			description: '',
			fireRating: '3',
		},
		'Trash': {
			source: 'Trash.mp3',
			releaseDate: '',
			description: '',
			fireRating: '1',
		},
		'Yet Simple': {
			source: 'Yet Simple.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
		},
		'Another': {
			source: 'Another.mp3',
			releaseDate: '',
			description: '',
			fireRating: '1',
		},
	},
	path: '%74%72%61%63ks/',
	easterEgg: {
		
	},
	openFile: function(file) {
		console.log(`Opening the file ${file}\n `);
		/* Set up a progress bar (Would love a canvas progress bar [nice looking!]) */
		clearInterval(this.pBarInt);
		this.audio.src = this.path.toLowerCase() + file;
		console.log(unescape(this.path.toLowerCase()));
		this.audio.onloadedmetadata = function() {
			let pBar = document.getElementById('progress');
			let time = document.getElementById('time');
			this.pBarInt = setInterval( function() {
				let cTime = Math.floor(app.audio.currentTime); /* Remove Fractions */
				let minute = 0;
				let second = cTime;
				for (let i = 0; i < Math.floor(second)/60 - 1; i++) {
					minute++;
					second -= 60;
				}
				if (second < 10) {
					second = '0' + second;
				}
				time.innerHTML = `${minute}:${second}`;
				
				pBar.style.width = (app.audio.currentTime / app.audio.duration) * 100 + '%';
			}, 50);
			this.play();
		}
		document.getElementById('playBtn').innerHTML = 'Pause';
	},
	currentTrack: 0,
	pBarInt: '',
	started: false,
	play: function(cPX) {
		if (this.started) {
		let msg;
			if (this.audio.paused) {
				this.audio.play();
				msg = 'Pause';
			} else {
				this.audio.pause();
				msg = 'Play';
			}
			return msg;
		} else {
			this.cPX++;
			msg = '<center style="font-size: ' + this.cPX + 'px;">Select a track first</center>';
			if (this.cPX == 24) {
				/* Click the text when you first start 10 times without selecting a song */
				app.easterEgg.One = document.createElement('link');
				app.easterEgg.One.href = 'easterEggs/One.css';
				app.easterEgg.One.type = 'text/css';
				app.easterEgg.One.rel = 'stylesheet';
				document.head.appendChild(app.easterEgg.One);
			}
			return msg;
		}
	},
	cPX: 14,
	restartSong: function() {
		this.audio.currentTime = 0;
	},
	dblClickTrue: false,
	previousTrack: function() {
		if (!app.dblClickTrue) {
			dblClick = setTimeout( function() {
				app.dblClickTrue = false;
			}, 1000);
		}
		if (!app.dblClickTrue) {
			this.restartSong();
		} else if (app.dblClickTrue) {
			/* Previous Track */
			this.currentTrack--;
			if (this.currentTrack < 0) {
				this.currentTrack = Object.keys(app.tracks).length;
			}
		}
		app.dblClickTrue = true;
		this.setupTrack();
	},
	currentTrack: 0,
	dblClick: '',
	dblClickTrue: false,
	nextTrack: function() {
		this.currentTrack++;
		if (this.currentTrack >= Object.keys(app.tracks).length) {
			this.currentTrack = 0;
		}
		this.setupTrack();
	},
	setupTrack: function() {
		let num = app.currentTrack;
		let obs = app.tracks;
		let obsName = Object.keys(obs)[num];
		obs = obs[obsName];
		let trackName = obsName;
		let trackRelease = obs.releaseDate;
		let trackDesc = obs.description;
		app.openFile(obs.source);
		
		document.getElementById('trackTitle').innerHTML = trackName;
		document.getElementById('releaseDate').innerHTML = 'Release: ' + trackRelease;
		document.getElementById('description').innerHTML = trackDesc;
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

window.onload = function() { /* Make sure to start the program AFTER the page loads */
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
			app.started = true;
			app.currentTrack = i;
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
				/* searchTerm = app.tracks[tracksEx[j].innerHTML].releaseDate.toUpperCase().indexOf(val); */
			} else if (document.getElementById('searchBy').value == 'fireRating') {
				searchTerm = app.tracks[tracksEx[j].innerHTML].fireRating.toUpperCase().indexOf(val);
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
		searchInput.onkeyup(); /* Search Again When The Filter Is Changed */
	}
	
	document.getElementById('playBtn').onclick = function() {
		this.innerHTML = app.play();
	}
	
	document.getElementById('nextBtn').onclick = function() {
		app.nextTrack();
	}
	
	document.getElementById('previousBtn').onclick = function() {
		app.previousTrack();
	}
	app.init();
	// Link Handling
	let lHHref = location.href;
	let lHTypes = ['open'];
	let lHTypesStated = lHHref.split('#');
	if (lHTypesStated.length > 1) {
		lHTypesStated = lHTypesStated[1].split('&');
		for (let i = 0; i < lHTypesStated.length; i++) {
			let lHCommand = lHTypesStated[i].split('?=')[0];
			let lHValue = lHTypesStated[i].split('?=')[1];
			console.log(lHValue)
			console.log(`Command ${lHCommand} recieved with the value of ${lHValue}\n `);
			switch(lHCommand) {
				case 'open':
					app.openFile(lHValue);
				break;
				default: 
					console.log(`Please note that the command ${lHCommand} was not found\n `);
				break;
			}
		}
	//console.log(lHTypesStated)
	}
}

})();
