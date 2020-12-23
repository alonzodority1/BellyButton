// Create the Trace
var trace1 = {
  x: month_data[0],
  y: credit_card_data,
  name: "Credit Card",
  type: "line"
};

// Create the Trace
var trace2 = {
  x: month_data[0],
  y: checking_data,
  name: "Checking",
  type: "line"
};

// Create the data array for the plot
var data = [trace1, trace2];

// Define the plot layout
var layout = {
  title: "2019 Product Complaints by Month",
  yaxis: {rangemode: "tozero"},
  height: 750
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
