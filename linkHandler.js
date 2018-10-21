// This ensures I can work on this OFFLINE
setTimeout( function() {
	if (navigator.onLine == false) {
		for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
			let lk = document.getElementsByTagName('a')[i];
			if (lk.attributes.hrefalt) {
				lk.href = lk.attributes.hrefalt.value;
			}
		}
	} else {
		let _wauimk = document.createElement('script');
		_wauimk.id = '_wauimk';
		var _wau = _wau || []; _wau.push(["classic", "lv6p9fdb0v", "imk"]);
		let otherscript = document.createElement('script');
		otherscript.async = true;
		otherscript.src = '//waust.at/c.js';
		document.body.appendChild(_wauimk);
		document.body.appendChild(otherscript);
	}
}, 500);