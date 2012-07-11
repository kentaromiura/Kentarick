module.exports = function(unit, property, callback, dontBind){
	var self = this;
	unit.subscribe('change', function(what){
		if (what.type == 'set' && what.name == property) {
			if (dontBind) {
				callback(value);
			} else {
				callback.call(self, what.value);
			}
		}
	})
	return self;
}