// Create the Trace
var trace1 = {
    x: product_data[1],
    y: product_data[0],
    type: "bar",
    orientation: 'h'
  };

  // Create the data array for the plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    title: "2019 Complaints by Product",
    //font: {size:10},
    // height: 750,
    //margin: {l:400}, // left margin
    //yaxis:{ticklen:5} // provides some space between the labels and yaxis
  };

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  