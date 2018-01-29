(function() {
 // initialize setup as soon as the page loads
 let music = {
	 'Celeste': {
		 source: 'tracks/celeste.mp3',
		 year: 2018,
		 desc: '',
	 },
 }
 for (let i = 0; i < Object.keys(music).length; i++) {
	 var trackName = Object.keys(music)[i];
	 var trackSource = music[trackName];
	 
	 var musicEl = document.createElement('div');
	 var musicHead = document.createElement('p');
	 musicEl.className = '';
		musicHead.innerHTML = trackName;
		musicEl.appendChild(musicHead);
		for (let i2 = 0; i2 < Object.keys(trackSource).length; i2++) {
			var trackInfo = Object.keys(trackSource)[i2];
			var trackInfoVal = trackSource[trackInfo].valueOf();
			
			if (trackInfo !== 'source') {
				var musicInfo = document.createElement('p');
					musicInfo.innerHTML = trackInfoVal;
					musicEl.appendChild(musicInfo);
			} else if (trackInfo === 'source') {
				var musicInfo = document.createElement('button');
					musicInfo.innerHTML = 'Play';
					musicEl.appendChild(musicInfo);
			}
		}
	 setTimeout( function() {
		document.getElementsByClassName('pageDisplay')[0].appendChild(musicEl);
	 }, 50);
 }
})();