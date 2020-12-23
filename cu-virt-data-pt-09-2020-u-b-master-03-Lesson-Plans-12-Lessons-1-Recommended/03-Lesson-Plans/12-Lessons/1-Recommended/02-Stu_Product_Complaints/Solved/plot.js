// Create the Trace
var trace1 = {
  x: product_data[0],
  y: product_data[1],
  type: "bar",
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "2019 Complaints by Product",
  xaxis: {title:'Product'},
  yaxis: {title:'Number of Complaints'},
//  margin: {b:300}, // bottom margin
//  font: {size:10},
//  height: 750,
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
