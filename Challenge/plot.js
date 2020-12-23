function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var samples= data.samples;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var samplesArray= samples.filter(sambleObj2 => sambleObj2.id == sample);
      var result = resultArray[0];
      var sampleresult=samplesArray[0];
      var otu_id = sampleresult.otu_ids;
      var otu_ids = otu_id;
      var otu_labels = sampleresult.otu_labels;
      var sample_values = sampleresult.sample_values.sort((a,b)=> b-a);
      var yticks = otu_ids;
      var float = result["wfreq"];
      

      // 8. Create the trace for the bar chart. 
      var barData = [{
      type: "bar",  
      x: sample_values.slice(0,10),
      y: yticks.slice(0,10).map(x => "OTU  " + x),
      
      orientation: 'h'
        }
  
        ];
      // 9. Create the layout for the bar chart. 
      var barLayout = {
      title: "Top 10 Bacterial Cultures Found",
          yaxis: {autorange: 'reversed'}
  
        };
      
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
      }
      ];
      
        // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title : "Bacteria Cultures per Sample",
       
      };
      
      // 4. Create the trace for the gauge chart.
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
      


        // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout);

      Plotly.newPlot("bubble", bubbleData, bubbleLayout);

      Plotly.newPlot("gauge", gaugeData);




      var PANEL = d3.select("#sample-metadata");
      console.log(float);
  
      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
    });
    
  }