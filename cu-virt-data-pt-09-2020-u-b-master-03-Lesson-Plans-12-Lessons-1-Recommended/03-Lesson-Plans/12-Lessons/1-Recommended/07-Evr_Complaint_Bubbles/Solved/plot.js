chart_type = "markers"

// Create the Trace
var trace1 = {
  x: month_data[0],
  y: checking_data,
  name: "Checking",
  mode: chart_type,
  marker: {
    size: checking_data_timely
  },
  text: checking_data_timely
};

// Create the Trace
var trace2 = {
  x: month_data[0],
  y: credit_card_data,
  name: "Credit Card",
  mode: chart_type,
  marker: {
    size: credit_card_timely
  },
  text: credit_card_timely
};


// Create the Trace
var trace3 = {
  x: month_data[0],
  y: mortgage_data,
  name: "Mortgage",
  mode: chart_type,
  marker: {
    size: mortgage_data_timely
  },
  text:mortgage_data_timely
};

// Create the Trace
var trace4 = {
  x: month_data[0],
  y: loan_data,
  mode: chart_type,
  name: "Loan",
  marker: {
    size: loan_data_timely
  },
  text:loan_data_timely
};

// Create the Trace
var trace5 = {
  x: month_data[0],
  y: student_loan_data,
  name: "Student Loan",
  mode: chart_type,
  marker: {
    size: student_loan_data_timely
  },
  text:student_loan_data_timely
};

// Create the data array for the plot
var data = [trace1,
            trace2,
            trace3,
            trace4,
            trace5];

// Define the plot layout
var layout = {
  title: "2019 Product Complaints by Month Sized by Untimeliness ",
  yaxis: {rangemode: "tozero"},
  height: 750
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
