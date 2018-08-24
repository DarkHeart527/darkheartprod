let app;
(function() {
console.info(`Hello! I see that you are peeking through the console... and the code. Unfortunatly, that is NOT how you get the beats. Anyway, since you're here, you should talk to me about collaborating with me in music production or website development. \nContact me at darkheartprod@gmail.com\n `);

app = {
	tracks: { /* Please note that tracks that start with a number must be at the top */
		/*'': {
			source: '.mp3',
			description: '',
			releaseDate: '',
			fireRating: '',
			download: true,
			code: '',
			featuring: '',
		},*/
		'War': {
			source: 'War.mp3',
			description: 'I can\'t even begin to explain how fire this is. It is just outrages! Many rappers have used this beat, I do not find all of them good but I will not give names.<br/>This beat comes with a lot of bass as well as an aggressive pluck. NOW WITH SNARE DROPS!',
			releaseDate: '7 - 6 - 2018',
			fireRating: '5',
			download: true,
			code: '',
		},
		'Untitled': {
			source: 'Untitled.mp3',
			description: 'I do not find this beat to much of a quality beat. I give it a rating of 3/5.',
			releaseDate: '7 - 5 - 2018',
			fireRating: '3',
			download: true,
			code: '',
		},
		'Hit the Bass': {
			source: 'Hit the Bass.mp3',
			description: 'It all depends on your thoughts as a rapper. To me, this is good, but I have done better.',
			releaseDate: '7 - 30 - 2018',
			fireRating: '4',
			download: true,
			code: '',
		},
		'Heavy': {
			source: 'Heavy.mp3',
			description: 'It all explains its self, well not necessaraly, it\'s fire.',
			releaseDate: '7 - 3 - 2018',
			fireRating: '5',
			download: true,
			code: '',
		},
		'High (Experimental Track)': {
			source: 'High.mp3',
			description: 'This highly experimental track was used to test pitch and volume transitions.',
			releaseDate: '8 - 7 - 2018',
			fireRating: '3',
			download: true,
			code: '',
			featuring: '',
		},
		'Bumpin': {
			source: 'Bumpin.mp3',
			description: 'Lots of kicks and tons of bass!',
			releaseDate: '7. - 18 - 2018',
			fireRating: '4',
			download: true,
			code: '',
		},
		'Brass': {
			source: 'Brass.mp3',
			description: 'This was not posted until now. Pretty fire though!',
			releaseDate: '5 - 19 - 2018',
			fireRating: '5',
			download: true,
			code: 'onlyforkeanu',
		},
		'Locking Bars': {
			source: 'Locking Bars.mp3',
			description: 'You might just like it! Made with lots of bass and drums with an agressive synth.',
			releaseDate: '5 - 6 - 2018',
			fireRating: '5',
			download: true,
			code: 'lockem215',
		},
		'Ooh Boi': {
			source: 'oohboi.mp3',
			description: 'Few hours to make, little edit the next day.',
			releaseDate: '5 - 4 - 2018',
			fireRating: '5',
			download: true,
			code: 'onlyoohboimyboi',
		},
		'Don\'t Play': {
			source: 'dont play.mp3',
			description: 'This was made at the top of my head, fire, yet simple.',
			releaseDate: '4 - 30 - 2018',
			fireRating: '5',
			download: true,
			code: 'playinforfools',
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
			download: true,
			code: 'melted207',
		},
		' 121': {
			source: '121.mp3',
			releaseDate: 'Unknown',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'Celeste': {
			source: 'Celeste.mp3',
			releaseDate: '1 - 7 - 2018',
			description: '',
			fireRating: '4',
			download: true,
			code: 'none',
		},
		'Money': {
			source: 'Money.mp3',
			releaseDate: '12 - 15 - 2017',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'Chaotic': {
			source: 'Chaotic.mp3',
			releaseDate: '2 - 7 - 2018',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'Finally': {
			source: 'Finally.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'Flames': {
			source: 'Flames.mp3',
			releaseDate: '',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'E.Z. Lop Les': {
			source: 'E.Z. Lop Les.mp3',
			releaseDate: '',
			description: '',
			fireRating: '4',
			download: true,
			code: 'none',
		},
		'Death': {
			source: 'Death.mp3',
			releaseDate: '',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'Chill': {
			source: 'Chill.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'Flute': {
			source: 'Flute.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'In Your Head': {
			source: 'In your head.mp3',
			releaseDate: '2 - 9 - 2018',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'Life Is Life': {
			source: 'Life Is Life.mp3',
			releaseDate: '',
			description: '',
			fireRating: '1',
			download: true,
			code: 'none',
		},
		'Lil Happy': {
			source: 'Lil Happy.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'Mass': {
			source: 'Mass.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'Nearly Nothing': {
			source: 'Nearly Nothing.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'Too Late': {
			source: 'Too Late.mp3',
			releaseDate: '',
			description: '',
			fireRating: '3',
			download: true,
			code: 'none',
		},
		'Trash': {
			source: 'Trash.mp3',
			releaseDate: '',
			description: '',
			fireRating: '1',
			download: true,
			code: 'none',
		},
		'Yet Simple': {
			source: 'Yet Simple.mp3',
			releaseDate: '',
			description: '',
			fireRating: '2',
			download: true,
			code: 'none',
		},
		'Another': {
			source: 'Another.mp3',
			releaseDate: '',
			description: '',
			fireRating: '1',
			download: true,
			code: 'none',
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
				while (second >= 60) {
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
			if (app.iframe != true) {
				if (this.cPX == 24) {
					/* Click the text when you first start 10 times without selecting a song */
					app.easterEgg.One = document.createElement('link');
					app.easterEgg.One.href = 'easterEggs/One.css';
					app.easterEgg.One.type = 'text/css';
					app.easterEgg.One.rel = 'stylesheet';
					document.head.appendChild(app.easterEgg.One);
				}
				if (this.cPX > 24) {
					app.easterEgg.One.outerHTML = '';
				}
				return msg;
			}
		}
	},
	
	updateTime: function(el) {
		let time = new Date();
		let h = time.getHours();
		let prefix = ':';
		if (h > 12) {
			h -= 12;
		}
		let m = time.getMinutes();
		let s = time.getSeconds();
		if (s < 10) {
			s = '0' + s;
		}
		if (m < 10) {
			m = '0' + m;
		}
		let msg = `${h}${prefix}${m}${prefix}${s}`;
		el.innerHTML = msg;
	},
	iframe: false,
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
		if (app.iframe != true) {
			document.getElementById('trackTitle').innerHTML = trackName;
			document.getElementById('releaseDate').innerHTML = 'Release: ' + trackRelease;
			document.getElementById('description').innerHTML = trackDesc;
		}
	},
	download: function(downloadP) {
		let downloadEl = document.getElementsByClassName('downloadBtn')[0];
		if (downloadP == 'disable') {
			downloadEl.removeAttribute('download');
			downloadEl.href = '#';
		} else if (downloadP == 'enable') {
			let trackName = Object.keys(app.tracks)[app.currentTrack];
			let track = app.tracks[trackName];
			console.log(track);
			if (track.code == 'none') {
				let date = new Date();
				let seconds = date.getSeconds();
				let minutes = date.getMinutes();
				let hours = date.getHours();
				downloadEl.download = `${trackName}_${hours}${minutes}${seconds}.mp3`;
				downloadEl.href = app.path + track.source;
			} else {
				downloadEl.onclick = function() {
					let downloadPrompt = document.getElementById('downloadPrompt');
					downloadPrompt.style.display = 'block';
					let downloadPromptText = document.getElementById('downloadPromptText')
					downloadPromptText.innerHTML = `Please enter the download code for ${trackName}.`;
					let downloadPromptLink = document.getElementById('downloadPromptLink');
					downloadPromptLink.style.display = 'none';
					let downloadPromptInput = document.getElementById('downloadPromptInput');
					let downloadPromptAccept = document.getElementById('downloadPromptAccept');
					downloadPromptAccept.onclick = function() {
						let value = downloadPromptInput.value;
						if (track.code == value.toLowerCase()) {
						let date = new Date();
						let seconds = date.getSeconds();
						let minutes = date.getMinutes();
						let hours = date.getHours();
						downloadPromptLink.href = app.path + track.source;
						downloadPromptLink.download = `${trackName}_${hours}${minutes}${seconds}.mp3`;
						downloadPromptLink.style.display = 'block';
						}
					}
				}
			}
		}
	},
	audio: '',
	init: function() {
		this.audio = new Audio();
		this.audio.autoPlay = true;
		this.audio.onended = function() {
			app.nextTrack();
		}
		setInterval(function() {app.updateTime(document.getElementsByClassName('headerTime')[0])}, 250);
	}
}


window.onload = function() { /* Make sure to start the program AFTER the page loads */
	if (app.iframe != true) {
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
					if (typeof(app.tracks[tracksEx[j].innerHTML].featuring) == 'undefined') {
						searchTerm = -1;
					} else {
						console.log(app.tracks[tracksEx[j].innerHTML].featuring);
						searchTerm = app.tracks[tracksEx[j].innerHTML].featuring.toUpperCase().indexOf(val);
					}
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
		
		document.getElementsByClassName('downloadBtn')[0].onmouseover = function() {
			app.download('enable');
		}
		
		document.getElementsByClassName('downloadBtn')[0].onclick = function() {
			app.download();
		}
		
		
		document.getElementsByClassName('downloadBtn')[0].onmouseout = function() {
			app.download('disable');
		}
		
		let imgs = document.getElementsByTagName('img');
		
		for (let i = 0; i < imgs.length; i++) {
			imgs[i].onmouseover = function(event) {
				document.getElementById('imageDisplay').style.display = 'block';
				this.onmousemove = function() {
					document.getElementById('imageDisplay').style.left = event.clientX;
					document.getElementById('imageDisplay').style.top = event.clientY;
				}
			}
			imgs[i].onmouseout = function() {
				this.onmousemove = '';
				document.getElementById('imageDisplay').style.display = 'none';
			}
		}
	}
	app.init();
	// Link Handling
	let lHHref = location.href;
	let lHTypes = ['open', 'redopen'];
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
				case 'redopen':
					window.open(lHValue);
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
