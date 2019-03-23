let app = {
	setCanvas: function(el) {
		if (typeof(el) == 'object') {
			this.canvas = el;
			this.ctx = this.canvas.getContext('2d');
		}
	},
	canvas: '',
	ctx: '',
	clear: function() {
		this.ctx.beginPath();
		this.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fill();
		this.ctx.closePath();
	},
	pictures: {},
	loadPicture: (id, src) => {
		if (!id) {
			id = Math.random() * Math.random() * 20;
		}
		//if (src.split('.')[1] == 'png' || src.split('.')[1] == 'jpg' || src.split('.')[1] == 'jpeg') {
			if (!app.pictures[id]) {
				let newEl = document.createElement('img');
				newEl.style.display = 'none';
				newEl.src = src;
				app.pictures[id] = newEl;
				return newEl;
			} else {
				throw new Error(`The id ${id} has already been used, please use a different id.`);
			}
		//} else {
			//alert('We only support png, jpg, and jpeg, at the moment, sorry for the inconvenience.');
		//}
	},
	filter: (scale) => {
		switch(scale) {
			case 'grayscale':
				for (let i = 0; i < app.canvas.width; i++) {
					for (let j = 0; j < app.canvas.height; j++) {
						let dat = app.ctx.getImageData(i, j, 1, 1).data;
						let fS = '';
						if (dat[0] > dat[1] && dat [0] > dat[2]) { // Red is the highest
							fS = dat[0];
						} else if (dat[1] > dat[0] && dat [1] > dat[2]) { // Green is the highest
							fS = dat[1];
						} else if (dat[2] > dat[0] && dat [2] > dat[1]) { // Blue is the highest
							fS = dat[2];
						} else { // White, black, or plain grey
							fS = dat[0];
						}
						app.ctx.beginPath();
						app.ctx.rect(i, j, 1, 1);
						app.ctx.fillStyle = `rgba(${fS}, ${fS}, ${fS}, ${dat[3]})`;
						app.ctx.fill();
						app.ctx.closePath();
					}
				}
			break;
			default:
			break;
		}
	},
	getColor: (type, col) => {
		let r;
		switch(type) {
			case 'grayscale':
				if (col[0] > col[1] && col [0] > col[2]) { // Red is the highest
					r = col[0];
				} else if (col[1] > col[0] && col [1] > col[2]) { // Green is the highest
					r = col[1];
				} else if (col[2] > col[0] && col [2] > col[1]) { // Blue is the highest
					r = col[2];
				} else { // White, black, or plain grey
					r = col[0];
				}
			break;
		}
		return r
	},
	lightfilter: (scale, type, minColor, maxColor, perSec) => {
		if (!perSec) {
			perSec = 100;
		}
		switch(scale) {
			case 'grayscale':
				let i = 0;
				function iw() {
					for (let j = 0; j < app.canvas.height; j++) {
						let dat = app.ctx.getImageData(i, j, 1, 1).data;
						let fS = app.getColor('grayscale', [dat[0], dat[1], dat[2]]);
						app.ctx.beginPath();
						app.ctx.rect(i, j, 1, 1);
						app.ctx.fillStyle = `rgba(${fS}, ${fS}, ${fS}, ${dat[3]})`;
						app.ctx.fill();
						app.ctx.closePath();
					}
					if (i >= app.canvas.width) {
					
					} else {
						setTimeout(function(){
						i++;
						iw()}, 1000/perSec);
					}
				}
				iw();
			break;
			case 'reverseContrast':
				let k = 0;
				function kw() {
					for (let j = 0; j < app.canvas.height; j++) {
						let dat = app.ctx.getImageData(k, j, 1, 1).data;
						app.ctx.beginPath();
						app.ctx.rect(k, j, 1, 1);
						app.ctx.fillStyle = `rgba(${Math.abs(dat[0]-255)}, ${Math.abs(dat[1]-255)}, ${Math.abs(dat[2]-255)}, ${dat[3]})`;
						app.ctx.fill();
						app.ctx.closePath();
					}
					if (k >= app.canvas.width) {
					
					} else {
						setTimeout(function(){
						k++;
						kw()}, 1000/perSec);
					}
				}
				kw();
			break;
			case 'reverseLighting':
				let m = 0;
				function mw() {
					for (let j = 0; j < app.canvas.height; j++) {
						let dat = app.ctx.getImageData(m, j, 1, 1).data;
						let fS = '';
						if (dat[0] < dat[1] && dat [0] < dat[2]) { // Red is the lowest
							fS = dat[0];
						} else if (dat[1] < dat[0] && dat [1] < dat[2]) { // Green is the lowest
							fS = dat[1];
						} else if (dat[2] < dat[0] && dat [2] < dat[1]) { // Blue is the lowest
							fS = dat[2];
						} else { // White, black, or plain grey
							fS = dat[0];
						}
						app.ctx.beginPath();
						app.ctx.rect(m, j, 1, 1);
						app.ctx.fillStyle = `rgba(${Math.abs(dat[0]-fS)}, ${Math.abs(dat[1]-fS)}, ${Math.abs(dat[2]-fS)}, ${dat[3]})`;
						app.ctx.fill();
						app.ctx.closePath();
					}
					if (m >= app.canvas.width) {
						
					} else {
						setTimeout(function(){
						m++;
						mw()}, 1000/perSec);
					}
				}
				mw();
			break;
			case 'keepOnly':
				let n = 0;
				function nw() {
					for (let j = 0; j < app.canvas.height; j++) {
						let dat = app.ctx.getImageData(n, j, 1, 1).data;
						let c1 = dat[0];
						let c2 = dat[1];
						let c3 = dat[2];
						let min = minColor;
						let max = maxColor;
						if (dat[0] < min[0] || dat[0] > max[0] || dat[1] < min[1] || dat[1] > max[1] || dat[2] < min[2] || dat[2] > max[2]) { // Fails to meet color conditions
							c1 = c2 = c3 = app.getColor('grayscale', [dat[0], dat[1], dat[2]]);
						} else { // Meets conditions
							// Leave it
							
						}
						app.ctx.beginPath();
						app.ctx.rect(n, j, 1, 1);
						app.ctx.fillStyle = `rgba(${c1}, ${c2}, ${c3}, ${dat[3]})`;
						app.ctx.fill();
						app.ctx.closePath();
					}
					if (n >= app.canvas.width) {
					
					} else {
						setTimeout(function(){
						n++;
						nw()}, 1000/perSec);
					}
				}
				nw();
			break;
			
			default:
			
			break;
		}
	},
}