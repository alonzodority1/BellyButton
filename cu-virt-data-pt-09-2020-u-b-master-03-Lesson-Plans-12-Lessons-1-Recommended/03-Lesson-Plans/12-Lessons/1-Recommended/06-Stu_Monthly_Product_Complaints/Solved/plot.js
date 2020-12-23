chart_type = "line"

// Create the Trace
var trace1 = {
  x: month_data[0],
  y: checking_data,
  name: "Checking",
  type: chart_type
};

// Create the Trace
var trace2 = {
  x: month_data[0],
  y: credit_card_data,
  name: "Credit Card",
  type: chart_type
};

// Create the Trace
var trace3 = {
  x: month_data[0],
  y: mortgage_data,
  name: "Mortgage",
  type: chart_type
};

// Create the Trace
var trace4 = {
  x: month_data[0],
  y: loan_data,
  name: "Loan",
  type: chart_type
};

// Create the Trace
var trace5 = {
  x: month_data[0],
  y: student_loan_data,
  name: "Student Loan",
  type: chart_type
};

// Create the data array for the plot
var data = [trace1,
            trace2,
            trace3,
            trace4,
            trace5];

// Define the plot layout
var layout = {
  title: "2019 Product Complaints by Month",
  yaxis: {rangemode: "tozero"},
  height: 750
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
