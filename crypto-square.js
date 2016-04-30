//create our crypto class
//it takes a string as an argument
var Crypto = function(text){
	//store the string for use elsewhere
	this.text = text;
};

var text = “s#$%^&plunk”;
console.log(text.replace(/[\W]/g, "").toLowerCase( ));

var text = "1, 2, 3 GO!";
console.log(text.replace(/[\W]/g, "").toLowerCase()) {

};



Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();


};

Crypto.prototype.size = function () {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));

};

Crypto.prototype.plaintextSegments = function() {
	var text = this.normalizePlaintext(),
	size = this.size(),
	segs = [];

	

	return segs;
};

Crypto.prototype.plaintextSegments = function()	{
	var segments = [],
	npt = this.noormalizePlaintext(),
	size = this.size();

	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.slice(i,i+size));
	}

	//

	return segments;

};

Crypto.prototype.ciphertext = function() {
	var ct = "";
		size = this.size();
		segs = this.plaintextSements();


	for (var i = 0; i < size; i += 1) { //columns
		for (var j = 0; j < segs.length; j += 1) { //rows
			ct += segs[j] .chartAt();
		}
	}

	//return a string that represents
	// the encrypted messsage
	return ct;


}; 

module.exports = Crypto;
