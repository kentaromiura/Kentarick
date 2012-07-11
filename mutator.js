module.exports = function(property, fn){
	if (property.indexOf('set ') == 0) {
		var prop = property.replace('set ', '');

		var setname = 'set' + prop.replace(/^([a-z]).*?/, function(x){
			return x.toUpperCase();
		})
		var implementation = {};
		implementation[setname] = function(){
			var res = fn.apply(this, arguments);

			this.publish('change', {
				type:  'set',
				name:  prop,
				value: this[prop]
			});

			return res;
		};

		this.implement(implementation);

	}else{
		this.prototype[property] = fn;
	}
}
