// module.exports = require('./lib/textart.js');
const textart = require('./lib/textart');

const payload = {
	"input":"ABCD",
	"typeface":"" // default to doom //
};

textart.textart(payload, response => {
	console.log(response)
});
