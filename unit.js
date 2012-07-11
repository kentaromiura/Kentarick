/*
* Based on keeto.Company
* baked for prime.
*/

var prime = require('prime');
var emitter = require('prime/util/emitter');
var _ = require('prime/util/ghost');

var dispatcher = new emitter();
var finalized = _({});

var unit = prime({
	_attached: true,
	_prefix: '',
	setPrefix: function(prefix){
		this._prefix = prefix;
		return this;
	},
	getPrefix: function(){
		return this._prefix;
	},
	publish: function(type, data, finalized){
		if(! this._attached) return;
		var event = [this.getPrefix(), '.', type].join('');
		dispatcher.emit(event, data);
		if (finalized) {
			var current = finalized.get(event) || [];
			current.push(data);
		}
	},
	subscribe: function(type, fn){
		if(! this._attached) return;
		var event = [this.getPrefix(), '.', type].join('');
		dispatcher.on(event, fn);
		var current = _(finalized.get(event) || []);
		current.each(function(data){
			fn(data);
		})
	},
	attachUnit: function(){
		this._attached = true;
	},
	detachUnit: function(){
		this._attached = false;
	},
	unsubscribe: function(type, fn){
		if(! this._attached) return;
		var event = [this.getPrefix(), '.', type].join('');
		dispatcher.off(event, fn);
	}
});

module.exports = unit;