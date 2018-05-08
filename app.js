let scale = 20
let cols, rows, snake, food

function setup() {
	frameRate(10)

	cols = Math.floor(width / scale)
	rows = Math.floor(height / scale)

	snake = new Snake(width/2, height/2)
	feed()
}

function draw() {
	background(51)

	if (snake.eat(food)) {
		snake.win()
		feed()
	}

	fill(255, 0, 100)
	rect(food.x, food.y, scale, scale)

	snake.update()
	snake.render()
	snake.death()
}

function feed() {
	food = createVector(random(cols - 1), random(rows - 1))
	food.multiply(scale)

	// Check the head
	if (snake.x === food.x && snake.y === food.y) {
		feed()
	}

	// Then the tail
	snake.tail.forEach((block) => {
		if (block.x === food.x && block.y === food.y) {
			feed()
		}
	})
}

function keyPressed() {
	switch (keyCode) {
		case 37:			
			snake.dir(-1, 0)
			break
		case 38:
			snake.dir(0, -1)
			break
		case 39:
			snake.dir(1, 0)
			break
		case 40:
			snake.dir(0, 1)
			break
	}
}

function keySpace() {
	snake.total++
}