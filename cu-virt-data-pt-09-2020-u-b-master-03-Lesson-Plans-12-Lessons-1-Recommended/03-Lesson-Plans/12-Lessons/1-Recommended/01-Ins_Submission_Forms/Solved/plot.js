// Part 1
// Create the Trace
var trace1 = {
  x: ["Web","Referral","Phone","Postal mail","Fax","Email"],
  y: [231819,17684,11334,6730,1890,25],
  // Part 2
  // Create the Trace with data.js
  // var trace1 = {
  //   x: submitted_data[0],
  //   y: submitted_data[1],
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "2019 Complaints",
  xaxis: {title:'Form of Submission'},
  yaxis: {title:'Number of Complaints'}
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
