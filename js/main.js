let d = 150
let total = 50
let xs = []
let ys = []
let dxs = []
let dys = []



function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)

  for (let i = 0; i < 100; i++) {
    xs.push(random(0, width))
    ys.push(innerHeight / 3)
    dxs.push(random(-3,2))
    dys.push(random(-2,4))
  }

}

function drawOverlaps (x, y){
  stroke(random(100,220), random(100,220), random(100,220))
  for (let i = 0; i < total; i++){
    let distance = dist(x, y, ys[i], xs[i])
    if (distance < d && distance !== 0) line (x, y, xs[i], ys[i])
  }

}
  function draw(){
    background (0, 0, 0, 30)

    for (let i = 0; i< total; i++){
      ys[i] += dxs [i]
      if (ys[i] > height || ys[i] < 0) dxs[i] = -dxs[i]
      drawOverlaps(xs[i], ys[i])

    }

}
