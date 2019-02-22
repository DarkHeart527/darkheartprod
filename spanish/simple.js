let newEl = (Element, Bypass, Value, Parent, Attributes) => {
	if (Element) {
		let newEle;
		let con = () => {
			newEle = document.createElement(Element.toLowerCase());
			if (Value && typeof(Value) == 'string') {
				newEle.innerHTML = Value;
			}
			if (Attributes) {
				if (typeof(Attributes) == 'object') {
					let obj = Attributes;
					
				} else if (typeof(Attributes) == 'string') {
					let splitType = '=';
					Attributes = Attributes.split(splitType);
					if (Attributes[0] && Attributes[1]) {
						let attrName = Attributes[0].split(' ');
						attrName = attrName[0];
						newEle[attrName] = Attributes[1];
					} else {
						console.error(`Attributes must be defined using "${splitType}". If this is not your error, something else if wrong with your code.`);
					}
				} else if (Attributes) {
					console.error(`The attributes may only be defined using an object or string.`);
				}
			}
			if (Parent && typeof(Parent) == 'object') {
				Parent.appendChild(newEle);
			}
		}
		if (!Bypass) {
			let valid = ['a', 'div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article', 'nav', 'iframe', 'object', 'script', 'style', 'head', 'title', 'header', 'footer', 'button', 'textarea', 'input', 'i', 'b', 'o', 'li', 'ul', 'ol'];
			let isValid = false;
			for (let i = 0; i < valid.length; i++) {
				if (Element.toLowerCase() == valid[i]) {
					con();
					isValid = true;
				}
			}
			if (!isValid) {
				console.error(`The element "${Element}" was not found to be a valid element, if you would still like to create the element, consider setting "Bypass" to true.`);
				return undefined;
			}
		} else {
			con();
		}
		if (newEle) {
			return newEle;
		}
	}
}

let copyObject = function(from) {
	let f = JSON.stringify(from);
	to = JSON.parse(f)
	return to;
}

let getId = (Value) => {
	return document.getElementById(Value);
}

let getFirstClass = (Value) => {
	return document.getElementsByClassName(Value)[0];
}

let getHeader = () => {
	return document.getElementsByTagName('header')[0];
}

let getBody = () => {
	return document.body;
}

let getHead = () => {
	return document.getElementsByTagName('head')[0];
}

let simple = {
	readXml: function(file) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			   // Typical action to be performed when the document is ready:
			   return xhttp.responseText;
			}
		};
		xhttp.open("GET", file, true);
		xhttp.send();
	},
	addExt: function(src) {
		let s;
		if (getHead()) {
			s = newEl('script', false, '', getHead(), `src =${src}`);
		} else {
			s = newEl('script', false, '', getBody(), `src =${src}`)
		}
		s.onload = () => {
			if (ext.verified) {
				for (i in ext.global) {
					let f = ext.global[i];
					window[i] = f
				}
				delete ext.verified;
				delete ext.global;
				for (i in ext.simplejs) {
					let f = ext.simplejs[i];
					simple[i] = f
				}
				delete ext.simplejs;
				simple[ext.info.extAlias] = copyObject(ext);
				for (i in ext.info) {
					let f = copyObject(ext.info);
					simple[ext.info.extAlias] = f
				}
				if (!ext.info.extDescription) {
					ext.info.extDescription = '';
				}
				if (!ext.info.extVersion) {
					ext.info.extVersion = 'Unknown';
				}
				console.info(`Successfully added the extension "${ext.info.extName}" by ${ext.info.extAuthor}\n${ext.info.extDescription}\nVersion: ${ext.info.extVersion}`);
				delete ext;
			}
		}
	},
}