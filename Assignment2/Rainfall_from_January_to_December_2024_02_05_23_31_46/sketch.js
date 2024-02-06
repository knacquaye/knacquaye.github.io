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
  
  let cellWidth = width/ 3; 
  let cellHeight = height / 21;
   // Draw title
    fill(0); // Set title text color
    textSize(16); // Set title text size
    textAlign(CENTER, TOP); // Align title text to be centered
    text('Amount of Rainfall Every Month in 2021 Liberia', width / 2, 20); // Position title at the top
  
  
  for (let i = 0; i < months.length; i++) {
    let colorValue = map(rainfall[i], 0, max(rainfall), 255, 0);
       
    fill(colorValue);
    
   
    let x = 200; 
    let y = (i * cellHeight) + 70;  
    

    rect(x, y, cellWidth, cellHeight);
   
    fill(255);
    
    // text for the rainfall amount
    textSize(12);
    textAlign(CENTER, CENTER);
    text(rainfall[i], x + cellWidth / 2, y + cellHeight / 2);
     
     // Draw month labels on the Y-axis
        fill(0); 
        textSize(12); 
        textAlign(RIGHT, CENTER); 
        text(months[i], x - 10, y + cellHeight / 2); 
    
    
  }
}











