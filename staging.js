const consolation = require('./index.js');

const payload = {
	"input":"jeff",
	"typeface":"3d" // default to doom //
};

consolation.textArt(payload, response => {
	console.log(response);
});
