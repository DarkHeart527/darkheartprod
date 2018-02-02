let mp = new Object();
(function() {
 // initialize setup as soon as the page loads
let music = {
	 'Celeste': {
		 source: 'tracks/Celeste.mp3',
		 year: 2018,
		 desc: 'This one did not take too long and I got really good comments about this. It uses a Celeste Piano with background sound made with Tize!',
	 },
	 '121': {
		 source: 'tracks/121.mp3',
		 year: 2017,
		 desc: 'No desc',
		 download: false,
	 },
	 'Chill': {
		 source: 'tracks/Chill.mp3',
		 year: 2017,
		 desc: 'No desc',
		 download: false,
	 },
	 'Death': {
		 source: 'tracks/Death.mp3',
		 year: 2017,
		 desc: 'No desc',
		 download: false,
	 },
	 'Another': {
		 source: 'tracks/Another.mp3',
		 download: false,
		 year: 2017,
		 desc: 'A trash beat with trash bass and trash synths.',
	 },
	 'E.Z. Lop Les': {
		 source: 'tracks/E.Z. Lop Les.mp3',
		 download: false,
		 year: 2017,
		 desc: 'What do you know? I have received so many great comments and not one bad, it has high hype in it as well!',
	 },
	 'Lil Happy': {
		 source: 'tracks/Lil Happy.mp3',
		 download: false,
		 year: 2017,
		 desc: 'My cousin likes this one, he said it sounds like a Lil Yacthy type beat.',
	 },
	 'Trash': {
		 source: 'tracks/Trash.mp3',
		 download: false,
		 year: 2017,
		 desc: 'It speaks for itself.',
	 },
	 'Life Is Life': {
		 source: 'tracks/Life Is Life.mp3',
		 download: false,
		 year: 2017,
		 desc: 'Can you believe this stuck to someone?',
	 },
	 'Money': {
		 source: 'tracks/Money.mp3',
		 download: false,
		 year: 2017,
		 desc: 'A great drop! This uses a piano and has really high, and I mean high, bass with an awesome drop!',
	 },
}
mp.play = () => {
	if (mp.music) {
		mp.music.play();
	} else {
		// Ignore
	}
}
mp.music = new Audio/*Context*/();
mp.volume = (val) => {
	mp.music.volume = val;
}
mp.speed = (val) => {
	mp.music.playbackRate = val;
}
mp.pause = () => {
	mp.music.pause();
}
mp.progress = {};
mp.progress.duration = 0;
mp.progress.time = 0;
mp.music.onloadedmetadata = () => {
	mp.progress.duration = mp.music.duration;
}
mp.progress.el = document.getElementById('progress');
mp.music.onended = () => {
	console.log('Ended');
}
setInterval( () => { 
	mp.progress.time = mp.music.currentTime;
	mp.progress.el.style.width = mp.progress.time / mp.progress.duration * 100 + '%';
	document.getElementById('volumeNumber').innerHTML = Math.floor(document.getElementById('volume').value);
	document.getElementById('speedNumber').innerHTML = 'x' + Number(document.getElementById('speed').value).toFixed(2);
	mp.volume(document.getElementById('volume').value / 100);
	mp.speed(document.getElementById('speed').value);
}, 10);

 for (let i = 0; i < Object.keys(music).length; i++) {
	 var trackName = Object.keys(music)[i];
	 var trackSource = music[trackName];
	 
	 var musicEl = document.createElement('div');
	 var musicHead = document.createElement('p');
	 musicHead.className = 'title';
	 musicEl.className = 'music';
		musicHead.innerHTML = trackName;
		musicEl.appendChild(musicHead);
		for (let i2 = 0; i2 < Object.keys(trackSource).length; i2++) {
			var trackInfo = Object.keys(trackSource)[i2];
			var trackInfoVal = trackSource[trackInfo].valueOf();
			
			if (trackInfo !== 'source' && trackInfo !== 'download') {
				var musicInfo = document.createElement('p');
					musicInfo.innerHTML = trackInfoVal;
					musicInfo.className = trackInfo;
					musicEl.appendChild(musicInfo);
			} else if (trackInfo === 'source') {
				var musicInfoPlay = document.createElement('div');
					musicInfoPlay.innerHTML = 'Play';
					musicInfoPlay.className = 'playButton';
					musicInfoPlay.attributes.source = trackInfoVal;
					musicInfoPlay.onclick = function() {
						mp.music.src = this.attributes.source;
						mp.play();
					};
					musicEl.appendChild(musicInfoPlay);
			} else if (trackInfo === 'download') {
				var musicInfo = document.createElement('div');
				musicInfo.innerHTML = 'Download Track';
				musicInfo.onclick = () => {
					alert('Downloading Is A WIP Project!');
				}
				musicEl.appendChild(musicInfo);
			}
		document.getElementsByClassName('pageDisplay')[0].appendChild(musicEl);
		setTimeout( function() {
			if (i == Object.keys(music).length - 1) {
				var node = document.createElement('div');
				node.style.marginBottom = '100px';
				node.style.width = '1px';
				node.style.height = '1px';
				document.getElementsByClassName('pageDisplay')[0].appendChild(node);
			}
		});
 }
}
})();