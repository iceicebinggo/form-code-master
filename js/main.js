let d = 100
let total = 100
let xs = []
let ys = []
let dxs = []
let dys = []



function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)

  for (let i = 0; i < 100; i++) {
    xs.push(random(0, width))
    ys.push(innerHeight / 2)
    dxs.push(random(-2,2))
    dys.push(random(-2,2))
  }

}

function drawOverlaps (x, y){
  stroke(random(100,255))
  for (let i = 0; i < total; i++){
    let distance = dist(x, y, xs[i], ys[i])
    if (distance < d && distance !== 0) line (x, y, xs[i], ys[i])
  }

}
  function draw(){
    background (0, 0, 0, 10)

    for (let i = 0; i< total; i++){
      ys[i] += dys [i]
      if (ys[i] > height || ys[i] < 0) dys[i] = -dys[i]
      drawOverlaps(xs[i], ys[i])

    }

}
