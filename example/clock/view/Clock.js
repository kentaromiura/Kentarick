var Clock = View({
	drawclock:    function(date){
		var now = date
		var ctx = this.ctx
		ctx.save()
		ctx.clearRect(0, 0, 150, 150)
		ctx.translate(75, 75)
		ctx.scale(0.4, 0.4)
		ctx.rotate(-Math.PI / 2)
		ctx.strokeStyle = "steelblue"
		ctx.fillStyle = "white"
		ctx.lineWidth = 8
		ctx.lineCap = "round"

		// Hour marks
		ctx.save()
		for (var i = 0; i < 12; i++) {
			ctx.beginPath()
			ctx.rotate(Math.PI / 6)
			ctx.moveTo(100, 0)
			ctx.lineTo(120, 0)
			ctx.stroke()
		}
		ctx.restore()

		// Minute marks
		ctx.save()
		ctx.lineWidth = 5
		for (i = 0; i < 60; i++) {
			if (i % 5 != 0) {
				ctx.beginPath()
				ctx.moveTo(117, 0)
				ctx.lineTo(120, 0)
				ctx.stroke()
			}
			ctx.rotate(Math.PI / 30)
		}
		ctx.restore()

		var sec = now.getSeconds()
		var min = now.getMinutes()
		var hr = now.getHours()
		hr = hr >= 12 ? hr - 12 : hr

		ctx.fillStyle = "black"

		// write Hours
		ctx.save()
		ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec)
		ctx.lineWidth = 14
		ctx.beginPath()
		ctx.moveTo(-20, 0)
		ctx.lineTo(80, 0)
		ctx.stroke()
		ctx.restore()

		// write Minutes
		ctx.save()
		ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
		ctx.lineWidth = 10
		ctx.beginPath()
		ctx.moveTo(-28, 0)
		ctx.lineTo(112, 0)
		ctx.stroke()
		ctx.restore()

		// Write seconds
		ctx.save()
		ctx.rotate(sec * Math.PI / 30)
		ctx.strokeStyle = "steelblue"
		ctx.fillStyle = "lightsteelblue"
		ctx.lineWidth = 6
		ctx.beginPath()
		ctx.moveTo(-30, 0)
		ctx.lineTo(83, 0)
		ctx.stroke()
		ctx.beginPath()
		ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(95, 0, 10, 0, Math.PI * 2, true)
		ctx.stroke()
		ctx.fillStyle = "#ddd"
		ctx.arc(0, 0, 3, 0, Math.PI * 2, true)
		ctx.fill()
		ctx.restore()

		ctx.beginPath()
		ctx.lineWidth = 14
		ctx.strokeStyle = '#009'
		ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
		ctx.stroke()

		ctx.restore()
	},
	'set update': function(date){
		this.drawclock(date)
	},
	constructor:  function(canvas){
		this.ctx = document.getElementById(canvas).getContext('2d')
		this.drawclock(new Date(0, 0, 0, 0, 0, 0))
	}
})
