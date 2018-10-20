// This ensures I can work on this OFFLINE
setTimeout( function() {
	if (navigator.onLine == false) {
		for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
			let lk = document.getElementsByTagName('a')[i];
			if (lk.attributes.hrefalt) {
				lk.href = lk.attributes.hrefalt.value;
			}
		}
	}
}, 500);