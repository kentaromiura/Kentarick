var prime = require('prime'),
	unit = require('./unit'),
	mutator = require('./mutator'),
	hook = require('./hook'),
	ctor = {};

module.exports = function(prefix){
	var Prefix = ctor[prefix] = 0;
	return function(proto){
		proto.inherits = unit;
		var ctr = proto.constructor;
		proto.mutator = mutator;
		proto.constructor = function(){
			if (ctr) ctr.apply(this, arguments);
			this.setPrefix(prefix + '.' + Prefix);
			Prefix++;
		}
		proto.hook = hook;
		return prime(proto);
	}
}