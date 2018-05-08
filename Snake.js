class Snake {

	constructor(x = 0, y = 0) {
		this.x = x
		this.y = y
		this.xSpeed = 1
		this.ySpeed = 0
		this.total = 0
		this.tail = []
	}

	death() {
		if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
			this.reset()
		}

		for (var i = 0; i < this.tail.length; i++) {
			let pos = this.tail[i]
			let d = distance(this.x, this.y, this.tail[i].x, this.tail[i].y)

			if (d < 1) {
				this.reset()
			}
		}
	}

	win() {
		if (cols * rows === snake.tail.length) {
			alert('Win!')
			this.reset()
		}
	}

	eat(food) {
		let d = distance(this.x, this.y, food.x, food.y)
		
		if (d > 1) {
			return false
		}

		this.total++
		return true
	}

	dir(xDir, yDir) {
		if (snake.tail.length) {
			if (snake.tail.last().x === this.x + xDir * scale) return
			if (snake.tail.last().y === this.y + yDir * scale) return
		}

		this.xSpeed = xDir
		this.ySpeed = yDir
	}

	update() {
		for (let i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1]
		}

		if (this.total >= 1) {
	    	this.tail[this.total - 1] = createVector(this.x, this.y)
	    }

		this.x = this.x + this.xSpeed * scale
		this.y = this.y + this.ySpeed * scale
	}

	render() {
		fill(255, 255, 255)

		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scale, scale)
		}

		rect(this.x, this.y, scale, scale)
	}

	reset() {
		alert('Game Over!')
		this.x = width / 2
		this.y = height / 2
		this.total = 0
		this.tail = []
	}
}