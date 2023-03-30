let myColors = ["cornflowerblue", "rebeccapurple", "salmon", "wheat", "peachpuff"];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("slategrey");

  //ellipse(20,20,30,30);
  //ellipse(50,20,30,30)
  //ellipse(80,20,30,30)

  let xCoord = 20;
  let yCoord = 20;

  let xCoord2 = 380;
  let yCoord2 = 20;

  for (let counter = 0; counter < 20; counter++) {
    let randomColor = myColors
    fill(myColors)
    ellipse(xCoord, yCoord, 30, 30);
    xCoord = xCoord + 30;
    yCoord = yCoord + 30;

    for (let counter = 0; counter < 20; counter++) {
      fill(myColors)
      ellipse(xCoord2, yCoord2, 30, 30);
      xCoord2 = xCoord2 - 30;
      yCoord2 = yCoord2 + 30;

    }
  }
}
  

