(function() {;

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
	openFile: function(file) {
		/* Set up a progress bar (Would love a canvas progress bar [nice looking!]) */
		clearInterval(this.pBarInt);
		this.audio.src = this.path.toLowerCase() + file;
		this.audio.onloadedmetadata = function() {
			this.play();
		}
	},
	currentTrack: 0,
	pBarInt: '',
	started: false,
	play: function(cPX) {
		if (this.started) {
		let img;
			if (this.audio.paused) {
				this.audio.play();
				img = 'Pause';
			} else {
				this.audio.pause();
				img = 'Play';
			}
			return img;
		}
	},
	iframe: false,
	cPX: 14,
	restartSong: function() {
		this.audio.currentTime = 0;
	},
	dblClickTrue: false,
	previousTrack: function() {
		if (!app.dblClickTrue) {
			setTimeout( function() {
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
	},
	audio: '',
	init: function() {
		this.audio = new Audio();
		this.audio.autoPlay = true;
		this.setupTrack();
		this.audio.play();
		this.audio.onended = function() {
			app.nextTrack();
		}
	}
}


window.onload = function() { /* Make sure to start the program AFTER the page loads */
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
			switch(lHCommand) {
				case 'playlist':
				
				break;
				default: 
				break;
			}
		}
	}
}

})();
