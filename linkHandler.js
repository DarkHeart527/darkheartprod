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
<script id="_wauimk">var _wau = _wau || []; _wau.push(["classic", "lv6p9fdb0v", "imk"]);</script><script async src="//waust.at/c.js"></script>