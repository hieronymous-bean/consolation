"use strict";
const textart = require('./lib/textart.js');


const payload = {
	"input":"HEGG",
	"typeface":"3d" // default to doom //
};

textart.textart(payload, response => {
	console.log(response);
});