let data;

function preload() {
  data = loadTable('HW2.csv', 'csv', 'header');
}

function setup() {
  createCanvas(900, 600);
  noLoop();
  textSize(12);
}

function draw() {
  background(220);
  let leftMargin = 220;
  let bottomMargin = 50;
  let topMargin = 20;
  let rightMargin = 80;

  if (data) {
    let numRows = data.getRowCount();
    let globalSales = data.getColumn('Global_Sales').map(Number);
    let gameNames = data.getColumn('Name');
    let maxSales = max(globalSales);

    drawAxes(leftMargin, bottomMargin, topMargin, rightMargin, maxSales, gameNames, numRows);
    
    let dotSpacing = (height - topMargin - bottomMargin) / (numRows + 1);
    for (let i = 0; i < numRows; i++) {
      let yPosition = topMargin + dotSpacing * (i + 1);
      let xPosition = map(globalSales[i], 0, maxSales, leftMargin, width - rightMargin);

      fill(100, 150, 200);
      noStroke();
      ellipse(xPosition, yPosition, 7, 7);

      fill(0);
      textAlign(RIGHT, CENTER);
      text(gameNames[i], leftMargin - 5, yPosition);
    }
  }
}
function drawAxes(leftMargin, bottomMargin, topMargin, rightMargin, maxSales, gameNames, numRows) {
  stroke(0);
  // X-axis
  line(leftMargin, height - bottomMargin, width - rightMargin , height - bottomMargin);
  // Y-axis
  line(leftMargin, height - bottomMargin, leftMargin, topMargin);

  // Define specific intervals
  let intervals = [0,3,5,7, 9, 11,13,15];
  
  // Draw X-axis labels for specific intervals
  intervals.forEach((value) => {
    let x = map(value, 0, 15, leftMargin, width - rightMargin);
    line(x, height - bottomMargin, x, height - bottomMargin + 5);
    textAlign(CENTER, TOP);
    text(value, x, height - bottomMargin + 10); // Adjust label positioning as necessary
  });

}



