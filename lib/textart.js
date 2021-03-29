"use strict";

const validator = require('validator');
const characterLookup = require('../dictionary/characterLookup.json');

function textart(payload, callback) {
	payload.input = (payload.input.toUpperCase())

	// validation for payload //
	if((!validator.isAlphanumeric(payload.input)) || (validator.isEmpty(payload.input,{ignore_whitespace:true}))) {
		throw new Error('Error: Invalid Payload Format. Please confirm proper data type formatting.')
		return;
	}

	// instantiate variables //
	let requestTypeface = '';
	let consoleTextArray = [];
	let finalConsoleText = '';

	// set default value for typeface if empty //
	if(validator.isEmpty(payload.typeface)) {
		requestTypeface = 'doom';
	} else {
		requestTypeface = payload.typeface;
	}

	// loop through payload input and get lookup value for each character //
	for (var a = 0; a < payload.input.length; a++) {
		let currentCharacter = payload.input[a];
		let lookupCurrentCharacter = characterLookup[requestTypeface].alphanumeric[currentCharacter];
		let lookupTypefaceHeight = characterLookup[requestTypeface].meta.height;

		// loop through each row of the lookup character and append its value to its respective array position //
		for (var b = 1; b <= lookupTypefaceHeight; b++) {
			let rowString = lookupCurrentCharacter[b];
			if(typeof consoleTextArray[b - 1] == 'undefined') {
				consoleTextArray[b - 1] = '';
			}
			consoleTextArray[b - 1] = consoleTextArray[b - 1] + rowString + ' '
		}
	}

	// loop through completed array and concatenate all indexes together //
	for (var c = 0; c < consoleTextArray.length; c++) {
		finalConsoleText = finalConsoleText + consoleTextArray[c] + '\n';
	}

	// return final string //
	return callback(finalConsoleText);

};

module.exports.textart = textart;