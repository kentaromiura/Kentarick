var DigitalClock = View({
	'set update': function(date){
		this.element.innerHTML = date.toTimeString().substring(0, 8)
	},
	constructor:  function(id){
		this.element = document.getElementById(id)
	}
})
