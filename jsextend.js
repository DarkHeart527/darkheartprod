Object.prototype.length = function() {
	return Object.keys(this).length;
}

Object.prototype.keys = function() {
	return Object.keys(this);
}