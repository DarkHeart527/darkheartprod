//(function() {
let lHHref = location.href;
let lHTypes = ['open'];
let lHTypesStated = lHHref.split('#');
if (lHTypesStated.length > 1) {
	lHTypesStated = lHTypesStated[1].split('&');
	for (let i = 0; i < lHTypesStated.length; i++) {
		let lHCommand = lHTypesStated[i].split('?=')[0];
		let lHValue = lHTypesStated[i].split('?=')[1];
		console.log(`Command ${lHCommand} recieved with the value of ${lHValue}\n `);
		switch(lHCommand) {
			case 'open':
				app.openFile(lHValue);
			break;
			default: 
				console.log(`Please note that the command ${lHCommand} was not found\n `);
			break;
		}
	}
}
console.log(lHTypesStated);
//});