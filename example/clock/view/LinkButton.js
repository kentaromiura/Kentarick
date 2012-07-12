var LinkButton = View({
	'set click': function(){},
	constructor: function(id){
		var self = this
		document.getElementById(id).onclick = function(){
			self.setClick()
		}
	}
})
