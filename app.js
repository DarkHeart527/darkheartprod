console.info(`Hello! I see that you are peeking through the console... and the code. Unfortunatly, that is NOT how you get the beats. Anyway, since you're here, you should talk to me about collaborating with me in music production or website development. \nContact me at darkheartprod@gmail.com\n `);

let app = {
	openFile: function(file) {
		console.log(`Opening the file ${file}\n `);
		let audio = new Audio();
		audio.src = file;
		audio.play();
	},
}
