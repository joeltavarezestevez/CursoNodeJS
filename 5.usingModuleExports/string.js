var stringMod = {};

function lowerCaseString(string) {
	return string.toLowerCase();
}

function upperCaseString(string) {
	return string.toUpperCase();
}

stringMod.lowerCaseString = lowerCaseString;
stringMod.upperCaseString = upperCaseString;

module.exports = stringMod;