/*
random.js
Generate random values!
Script by DarkHeart Productions
*/

let newRandom = (type, keyLength, cb) => {
	let keyz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ,'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '_'];
	if (typeof(keyLength) == 'number' && type) {
		let fnKey = '';
		for (let i = 0; i < keyLength; i++) {
			let key = '';
			if (type == "all") {
				key = keyz[Math.floor(Math.random() * keyz.length)];
			} else if (type == "numerical") {
				key = keyz[Math.floor(Math.random() * 10) + 52];
			} else if (type == "alphabetical") {
				key = keyz[Math.floor(Math.random() * 52)];
			} else if (type == "alphabeticalLC") {
				key = keyz[Math.floor(Math.random() * 26)];
			} else if (type == "alphabeticalUC") {
				key = keyz[Math.floor(Math.random() * 26) + 26];
			} else {
				key = keyz[Math.floor(Math.random() * keyz.length)]; // just do all
			}
			fnKey += key;
			if (i == keyLength - 1) {
				if (typeof(cb) == 'function') {
					cb();
				}
				return fnKey;
			}
		}
	}
}