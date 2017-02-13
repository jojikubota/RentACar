var margin = {top: 20, right: 20, bottom: 100, left: 40},
    width = 300 - margin.left - margin.right,
    height = 100 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);


// add the SVG element
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
          //"translate(710, 100)");


function loadAvailability(file){

         svg.selectAll(".bar").remove();
         svg.selectAll(".axis").remove();
         svg.selectAll(".text").remove();


        console.log("loading file : " + file);
        // load the data
        d3.json(file, function(error, data) {

            data.forEach(function(d) {
                d.Letter = d.City;
                d.Freq = +d.Available;
            });
        	
          // scale the range of the data
          x.domain(data.map(function(d) { return d.City; }));
          y.domain([0, d3.max(data, function(d) { return d.Available; })]);

          // add axis
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
            .selectAll("text")
              .style("text-anchor", "end")
              .attr("dx", "-.8em")
              .attr("dy", "-.55em")
              .attr("transform", "rotate(-90)" );

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 5)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Availability");


          // Add bar chart
          svg.selectAll("bar")
              .data(data)
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("fill", function (d){
                 if(d.Available > 20)
                    return "green";

                  if(d.Available < 10)
                    return "red"

                  return "orange"
              })
              .attr("y", function(d) { return y(d.Available); })
              .attr("height", function(d) { return height - y(d.Available); });

        });
}

/*loadAvailability("bar-chart-data.json");

    var i = 0;
    setInterval(function() {
            
            if(i == 0){
              loadAvailability("bar-chart-data2.json");

              i++;
            }else{
              loadAvailability("bar-chart-data.json");

              i--;
            }

              }, 10 * 1000); */
