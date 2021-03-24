const validator = require('validator');

const characterLookup = {
	"3D": {
		"meta": {
			"height": 8,
			"width":
		},
		"alphanumeric": {
			"A":"",
			"B":"",
			"C":"",
			"D":"",
			"E":"",
			"F":"",
			"G":"",
			"H":"",
			"I":"",
			"J":"",
			"K":"",
			"L":"",
			"M":"",
			"N":"",
			"O":"",
			"P":"",
			"Q":"",
			"R":"",
			"S":"",
			"T":"",
			"U":"",
			"V":"",
			"W":"",
			"X":"",
			"Y":"",
			"Z":"",
			"0":"",
			"1":"",
			"2":"",
			"3":"",
			"4":"",
			"5":"",
			"6":"",
			"7":"",
			"8":"",
			"9":""
		}
	},
	"Doom": {
		"meta": {
			"height": 6,
			"width":""
		},
		"alphanumeric": {
			"A":"  ___  \n / _ \\\n/ /_\\\ \\\n|  _  |\n| | | |\n\\_| |_/",
			"B":"______\n| ___ \\\n| |_/ /\n| ___ \\\n| |_/ /\n\\____/ ",
			"C":"",
			"D":"",
			"E":"",
			"F":"",
			"G":"",
			"H":"",
			"I":"",
			"J":"",
			"K":"",
			"L":"",
			"M":"",
			"N":"",
			"O":"",
			"P":"",
			"Q":"",
			"R":"",
			"S":"",
			"T":"",
			"U":"",
			"V":"",
			"W":"",
			"X":"",
			"Y":"",
			"Z":"",
			"0":"",
			"1":"",
			"2":"",
			"3":"",
			"4":"",
			"5":"",
			"6":"",
			"7":"",
			"8":"",
			"9":""
		}
	},
	"Graceful": {
		"meta": {
			"height": 4,
			"width":""
		},
		"alphanumeric": {
			"A":"",
			"B":"",
			"C":"",
			"D":"",
			"E":"",
			"F":"",
			"G":"",
			"H":"",
			"I":"",
			"J":"",
			"K":"",
			"L":"",
			"M":"",
			"N":"",
			"O":"",
			"P":"",
			"Q":"",
			"R":"",
			"S":"",
			"T":"",
			"U":"",
			"V":"",
			"W":"",
			"X":"",
			"Y":"",
			"Z":"",
			"0":"",
			"1":"",
			"2":"",
			"3":"",
			"4":"",
			"5":"",
			"6":"",
			"7":"",
			"8":"",
			"9":""
		}
	},
	"Impossible": {
		"meta": {
			"height": 12,
			"width":""
		},
		"alphanumeric": {
			"A":"",
			"B":"",
			"C":"",
			"D":"",
			"E":"",
			"F":"",
			"G":"",
			"H":"",
			"I":"",
			"J":"",
			"K":"",
			"L":"",
			"M":"",
			"N":"",
			"O":"",
			"P":"",
			"Q":"",
			"R":"",
			"S":"",
			"T":"",
			"U":"",
			"V":"",
			"W":"",
			"X":"",
			"Y":"",
			"Z":"",
			"0":"",
			"1":"",
			"2":"",
			"3":"",
			"4":"",
			"5":"",
			"6":"",
			"7":"",
			"8":"",
			"9":""
		}
	},
	"Isometric": {
		"meta": {
			"lines": 11,
			"width":""
		},
		"alphanumeric": {
			"A":"",
			"B":"",
			"C":"",
			"D":"",
			"E":"",
			"F":"",
			"G":"",
			"H":"",
			"I":"",
			"J":"",
			"K":"",
			"L":"",
			"M":"",
			"N":"",
			"O":"",
			"P":"",
			"Q":"",
			"R":"",
			"S":"",
			"T":"",
			"U":"",
			"V":"",
			"W":"",
			"X":"",
			"Y":"",
			"Z":"",
			"0":"",
			"1":"",
			"2":"",
			"3":"",
			"4":"",
			"5":"",
			"6":"",
			"7":"",
			"8":"",
			"9":""
		}
	}
};

function textart(payload, callback) {
	let formattedResult ='';

	if((!validator.isAlphanumeric(payload)) || (validator.isEmpty(payload,{ignore_whitespace:true}))) {
		throw new Error('Error: Invalid Payload Format. Please confirm proper data type formatting.')
		return;
	}

	for (var i = payload.length - 1; i >= 0; i--) {

	}

	return callback(formattedResult);

};

module.exports.textart = textart;