module.exports = {

	add : function (n1, n2) {
		return n1 + n2;
	},

	substract: function (n1, n2) {
		return n1 - n2; 
	},

	multiply: function (n1, n2) {
		return n1 * n2;
	},

	divide: function (n1, n2) {
		if(n2 == 0) {
			console.log("Sorry, you can\'t divide by zero.");
		}
		else {
			return n1 / n2;
		}
	}
}