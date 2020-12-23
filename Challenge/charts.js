function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples= data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray= samples.filter(sambleObj2 => sambleObj2.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var sampleresult=samplesArray[0]; 
    console.log(sampleresult);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = sampleresult.otu_ids;
    var otu_labels = sampleresult.otu_labels;
    var sample_values = sampleresult.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids;

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10),
      y: yticks.slice(0,10).map(x => "OTU  " + x),
      type: "bar",
      orientation: 'h'

    }
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      tilte: "Top 10 Bacterial Cultures Found",
      yaxis: {autorange: 'reversed'}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      type: "bubble",
      mode: 'markers',
      x: yticks,
      y: sample_values,
      hovertemplate: '( <b>%{x} , %{y}</b> )' + '<br>%{text}</br>',
      text : otu_labels,
 

      marker: {color: yticks,
        size: sample_values,
      }
    }];
    
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title : "Bacteria Cultures per Sample",
       
      };

      Plotly.newPlot("bubble", bubbleData, bubbleLayout);

      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var float = result["wfreq"];



      var gaugeData = [{
        domain: { x: [0, 1], y: [0, 1] },
		    value: float,
		    title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
		    type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: {range: [0,10]},
          steps:[ {range: [0,2], color: "red"},
                {range: [2,4], color: "darkorange"},
                {range: [4,6], color: "yellow"},
                {range: [6,8], color: "lime"},
                {range: [8,10], color: "green"}],

        }
      }
     
        ];
      
    Plotly.newPlot("gauge", gaugeData);

  });
}
