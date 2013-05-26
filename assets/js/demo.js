var w = 500;
var h = 100;

var svg = d3.select("#d3demo")
			.append("svg")
			.attr("width",w)
			.attr("height",h); 

var dataset = [5,10,15,20,25];

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");
    
circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       })
       .style("fill", "red");