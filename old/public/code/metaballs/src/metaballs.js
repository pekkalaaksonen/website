'use strict'

function random (min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min
  return (num === 0) ? random(min, max) : num
}

function createCanvas (size) {
  let canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  return canvas
}

function createBall (size, ballColor) {
  let canvas = createCanvas(size)
  let ctx = canvas.getContext('2d')
  let imageData = ctx.getImageData(0, 0, size, size)
  let data = imageData.data
  let radius = size * size
  let center = size >> 1

  for (let i = 0; i < radius * 4; i += 4) {
    let x = (i / 4) % size
    let y = Math.floor((i / 4) / size)

    let color = 0

    let sqr = (x - center) * (x - center) + (y - center) * (y - center)
    color = radius / sqr - (sqr / size / (size / 20))

    // if (color < 0) { color = 0 };
    // if (color > 255) { color = 255 };

    switch (ballColor) {
      case 1:

        data[i + 0] = color * 1.4 // r
        data[i + 1] = color * 0.5 // g
        data[i + 2] = color * 0.5 // b
        data[i + 3] = 255 // a

        break

      case 2:

        data[i + 0] = color * 0.5 // r
        data[i + 1] = color * 1.4 // g
        data[i + 2] = color * 0.5 // b
        data[i + 3] = 255 // a

        break

      case 3:

        data[i + 0] = color * 0.5 // r
        data[i + 1] = color * 0.5 // g
        data[i + 2] = color * 1.4 // b
        data[i + 3] = 255 // a
    }
  }

  ctx.putImageData(imageData, 0, 0)

  return canvas
}

function ParticleSystem (width, height) {
  this.pallot = []
  this.width = width
  this.height = height
}

ParticleSystem.prototype.updateLocation = function (dt) {
  for (let pallo of this.pallot) {
    pallo.x += pallo.vx * dt
    pallo.y += pallo.vy * dt

    if (pallo.x > this.width) {
      pallo.x = this.width
      pallo.vx = -(pallo.vx)
    } else if (pallo.x < 0) {
      pallo.x = 0
      pallo.vx = -(pallo.vx)
    }

    if (pallo.y > this.height) {
      pallo.y = this.height
      pallo.vy = -(pallo.vy)
    } else if (pallo.y < 0) {
      pallo.y = 0
      pallo.vy = -(pallo.vy)
    }
  }
}

ParticleSystem.prototype.drawBalls = function (ctx) {
  ctx.globalCompositeOperation = 'lighter'

  for (let pallo of this.pallot) {
    let drawLocationX = pallo.x - pallo.size / 2 | 0
    let drawLocationY = pallo.y - pallo.size / 2 | 0

    ctx.drawImage(pallo.texture, drawLocationX, drawLocationY)
  }
}

function Ball () {
  this.size = random(500, 2000)
  this.x = random(0, width)
  this.y = random(0, height)
  this.vx = Math.random() - 0.5// random(-2,2);
  this.vy = Math.random() - 0.5// random(-2,2);
  this.ballColor = random(1, 3)
  this.texture = createBall(this.size, this.ballColor)
}

/* function createScanLines (width, height) {
  let slCanvas = createCanvas(width, height)
  let slCtx = slCanvas.getContext('2d')
  for (let i = 3; i < height; i += 3) {
    slCtx.strokeStyle = '#000000'
    slCtx.beginPath()
    slCtx.lineWidth = 1
    slCtx.moveTo(0.5, i + 0.5)
    slCtx.lineTo(width + 0.5, i + 0.5)
    slCtx.stroke()
  }
ß
  return slCanvas
} */

/* function drawScanLines (ctx, canvas) {
  ctx.globalCompositeOperation = 'overlay'
  ctx.drawImage(canvas, 0, 0)
} */

let canvas = document.getElementById('canvas')
let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight
let ctx = canvas.getContext('2d')
ctx.fillStyle = 'black'

// let scanLines = createScanLines(width, height);

let particleSystem = new ParticleSystem(width, height)
let numBalls = 25

for (let i = 0; i < numBalls; ++i) {
  let pallo = new Ball()
  particleSystem.pallot.push(pallo)
}

let last = performance.now()
let current
let dt;
(function frame () {
  requestAnimationFrame(frame)
  current = performance.now()
  dt = current - last
  last = current
  ctx.clearRect(0, 0, width, height)
  particleSystem.updateLocation(dt)
  particleSystem.drawBalls(ctx)
  // drawScanLines(ctx, scanLines);
})()
