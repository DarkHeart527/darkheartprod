var settings = {
	format: 'list',
	subLinks: true,
}

var links = {
	'Index': 'index.html',
	'Beats': {
		main: 'beats.html',
		'My Beats': 'tagService.html#beats.html#darkheartprod',
	},
	'Programming': {
		main: '#programming.html',
		'HTML': '#programmingHtml.html',
		'Javascript': '#programmingJavascript.html',
	},
	'Language Improvement': {
		main: '#languageI.html'	
	},
	'Website Languages': 'languages.html',
	'Personal': 'forme.html',
}

function autoLinks() {
	var tag;
	var afterTag;
	var linkTag;
	var afterLinkTag;
	var html = new String();
	if (settings.format == 'list' | true == true) {
		tag = '<ul>';
		afterTag = '</ul>';
		linkTag = '<li>';
		afterLinkTag = '</li>';
	} else {
		console.error('AL: We currently only do lists - list');
	}
	for (let i = 0; i < Object.keys(links).length; i++) {
		var linkName = Object.keys(links)[i];
		var linkValue = links[linkName];
		var subLinks = 'None';
		if (typeof linkValue === 'object') {
			subLinks = linkValue;
			linkValue = linkValue.main;
			html += `<li><a href='${linkValue}'>${linkName}</a></li><ul>`;
			for (let i2 = 0; i2 < Object.keys(subLinks).length; i2++) {
				var subLinkName = Object.keys(subLinks)[i2];
				var subLinkValue = subLinks[subLinkName];
				if (subLinkName === 'main') {
					// Ignore
				} else {
					html += `<li><a href='${subLinkValue}'>${subLinkName}</a></li>`;
				}
			}
			html += '</ul>'; // This closes the sub list after everything is created
		} else if (typeof linkValue === 'string') {
			html += `<li><a href='${linkValue}'>${linkName}</a></li>`
		}
	}
	settings.linkContainer.innerHTML = html;
}

setTimeout( function() {
	settings.linkContainer = document.getElementsByClassName('links')[0];
	autoLinks();
}, 50);

// An Extra

const loadSCripts = () => {
	setTimeout( function() {
		var script = document.createElement('script');
		script.src = "scripts/language.js";
		document.body.appendChild(script);
	}, 500);
}
loadScripts();
