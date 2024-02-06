let data;

function preload(){
  data = loadTable('HW2.csv','csv','header');
}
let leftMargin  = 50;
let rightMargin  = 50;
let topMargin  = 250;
let bottomMargin = 100;
function setup() {
  createCanvas(650, 500);
  noLoop();
  textSize(12);
}

function draw() {
  background(220);
  
  if(data){
     //get number of rows in csv file
    let numRows = data.getRowCount();
    print(numRows)
    let numColums = data.getColumnCount();
    print(numColums)
    let global_sales = data.getColumn('Global_Sales');
    print(global_sales);
    let game_names = data.getColumn('Name');
    print(game_names);
     let maxSales = max(global_sales); 
    
    let barWidth = (width - 80)   / numRows;
    
    for(let i = 0; i < numRows; i++){
      
       let barHeight = map(global_sales[i], 0, max(global_sales), 0, height - topMargin - bottomMargin);
       fill(100,150,200)
      
       rect(leftMargin + i * barWidth, height - bottomMargin - barHeight, barWidth - 10, barHeight);
      
      fill(0); // Set text color to black for better visibility
      textAlign(CENTER, TOP); // Align text to be centered horizontally and positioned at the top vertically
      text(game_names[i], leftMargin + i*barWidth + (barWidth / 2) - 27, height - bottomMargin + 5, barWidth - 10);
      
      
       // Add Y-axis labels
    fill(0); // Set text color to black
    textSize(12); // Set text size for Y-axis labels
    textAlign(RIGHT, CENTER); // Align text to the right for Y-axis labels
    let yAxisValues = 14; // Number of Y-axis labels
    for (let i = 0; i <= yAxisValues; i++) {
      let value = i;
      let yPosition = map(value, 0, maxSales, height - bottomMargin, topMargin);
      text(value, leftMargin - 10, yPosition);
    }
      
      
    }
    
  }
  
  
}