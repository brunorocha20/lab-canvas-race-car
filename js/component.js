class Component {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.car = new Image();
  }

  // Drawing the car (player)
  drawCar() {
    this.car.src = '/images/car.png';
    ctx.drawImage(this.car, this.x, this.y, this.w, this.h);
  }

  checkCollision(obstacle) {
    return this.crashWith(obstacle);
  }

  bottom() {
    return this.hitbox.y + this.hitbox.h;
  }
  top() {
    return this.hitbox.y;
  }
  right() {
    return this.hitbox.x + this.hitbox.w;
  }
  left() {
    return this.hitbox.x;
  }
  crashWith(obstacle) {
    return (
      this.x < obstacle.x + obstacle.w &&
      this.x + this.w > obstacle.x &&
      this.y < obstacle.y + obstacle.h &&
      this.y + this.h > obstacle.y
    );
  }
}

class Enemy {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
  }

  bottom() {
    return this.y + this.h;
  }
  top() {
    return this.y;
  }
  right() {
    return this.x + this.w;
  }
  left() {
    return this.x;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
