var live = false;

if (live) {
	setTimeout( function() {location = location;}, 50);
}


function activateFrame(src, on) {
 if (on) {
  document.getElementById('seeFrame').src = src;
  document.getElementById('seeFrame').style.display = 'block';
 } else {
  document.getElementById('seeFrame').style.display = 'none';
 }
}
for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
  if (document.getElementsByTagName('img')[i].id != 'playPause') {
  document.getElementsByTagName('img')[i].style = "cursor: pointer;"
  document.getElementsByTagName('img')[i].onmouseover = function() {
  var a = document.getElementsByTagName('img')[i].src;
  var b = a.split('/');
  var c = b.length;
  activateFrame('picDisplay.html#' + b[c - 1], true);
 }
  document.getElementsByTagName('img')[i].onmouseout = function() {
  activateFrame('', false);
 }
  document.getElementsByTagName('img')[i].onmousemove = function() {
  document.getElementById('seeFrame').style.top = (event.clientY + 15) + "px";
  document.getElementById('seeFrame').style.left = (event.clientX + 15) + "px";
 }
  } else {
  }
}

document.getElementById('playPause').style.cursor = "pointer";
document.getElementById('playPause').onclick = function() {
	if (this.attributes.playing == true) {
		this.attributes.playing = false;
		this.src = 'pics/play.png';
		document.getElementsByTagName('audio')[0].pause();
	} else {
		this.attributes.playing = true;
		this.src = 'pics/stop.png';
		if (document.getElementsByTagName('audio')[0].src == 'https://darkheart527.github.io/darkheartprod/beats.html' | document.getElementsByTagName('audio')[0].src == '' | document.getElementsByTagName('audio')[0].src == null | document.getElementsByTagName('audio')[0].src == '(unknown)' | document.getElementsByTagName('audio')[0].src == NaN) {
		 document.getElementsByTagName('audio')[0].src = 'beats/Flames.mp3';
		 document.getElementsByTagName('audio')[0].play();
		} else {
		 document.getElementsByTagName('audio')[0].play();
		}
	}
}

function setupNames() {
 for (let i = 0; i < document.getElementsByTagName('playButton').length; i++) {
  document.getElementsByTagName('playButton')[i].onclick = function() {
   document.getElementsByTagName('audio')[0].src = this.attributes.url.value;
   document.getElementById('playPause').attributes.playing = true;
   document.getElementById('playPause').src = 'pics/stop.png';
  }
 }
}

function checkNameMusic() {
 var loc = location.href;
 var loc2 = loc.split('/');
 for (let i = 0; i < loc2.length; i++) {
  if (loc2[i] == 'beats.html') {
   setupNames();
  } else {
   continue;  
  }
 }
}

checkNameMusic();
