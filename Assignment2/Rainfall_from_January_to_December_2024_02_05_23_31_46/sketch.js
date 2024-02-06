let data;

function preload() {
  data = loadTable('heatmap.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 600);
  noLoop(); 
}

function draw() {
  
  background(255);
  
  let leftMargin = 100;
  let months = data.getColumn('Month');
  let rainfall = data.getColumn('Rainfall').map(Number); 
  
  let cellWidth = width/ 2; 
  let cellHeight = height / months.length; 
  
  
  for (let i = 0; i < months.length; i++) {
    let colorValue = map(rainfall[i], 0, max(rainfall), 255, 0);
    
    
    fill(colorValue);
    
    //  position for the cell 
    let x = 100; // X position is the start of the canvas
    let y = i * cellHeight; // Y position is the month index
    

    rect(x, y, cellWidth, cellHeight);
   
    fill(255);
    
    // text for the rainfall amount
    textAlign(CENTER, CENTER);
    text(rainfall[i], x + cellWidth / 2, y + cellHeight / 2);
    
    
  }
}











