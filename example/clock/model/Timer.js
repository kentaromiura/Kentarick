var Timer = Model({
	'set time':  function(time){
		this.time = time
	},
	reset:       function(){
		this.seconds = 0
		this.setTime(new Date(0, 0, 0, 0, 0, 0))
	},
	tick:        function(){
		this.seconds++
		this.setTime(new Date(0, 0, 0, 0, 0, this.seconds))
	},
	constructor: function(){
		this.seconds = 0
		this.reset()
	}
})
