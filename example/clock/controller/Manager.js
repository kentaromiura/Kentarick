var Manager = Controller({
	'set start':  function(){
		if (!this.running) {
			this.running = true
			this.intervalID = setInterval(this.interval, 1000)
		}
	},
	'set stop':   function(){
		if (this.running) {
			this.running = false
			clearInterval(this.intervalID)
		}
	},
	'set reset':  function(){},
	'set update': function(){},
	constructor:  function(){
		var self = this
		this.running = false
		this.interval = function(){
			self.setUpdate(true)
		}
	}
})
