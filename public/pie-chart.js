				/*var r = 100;

				var color = d3.scale.ordinal()
						.range(["red", "blue", "orange", "green", "purple"]);

				var canvas = d3.select("body").append("svg")
					.attr("width", 250)
					.attr("height", 250)
					.append("g")
						.attr("transform", "translate(300, 300)");

				var pie = d3.layout.pie()
						.value(function(d) { return d.bookings; });

				var arc = d3.svg.arc()
						.innerRadius(0)
							.outerRadius(r);*/

				function drawPieChart(file){
					console.log("file :" + file);

					d3.json(file, function(data) {

						var arcs = canvas.append("g").selectAll(".arc")
										.data(pie(data))
										.enter()
												.append("g")
												.attr("class", "arc");

						arcs.append("path")
							.attr("d", arc)
							.attr("fill", function(d) { 
								console.log("color :", d.data.color);
								return d.data.color;
								//return color(d.data.population); 
							});

						arcs.append("text")
							.attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
							.attr("text-anchor", "middle")
							.attr("font-size", "0.5cm")
							.text(function (d) { return d.data.type; });

					});
				}

		/*drawPieChart("car-bookings2.json");

		var i = 0;
		setInterval(function() {
					  
					  if(i == 0){
					  	drawPieChart("car-bookings1.json");
					  	i++;
					  }else{
					  	drawPieChart("car-bookings2.json");
					  	i--;
					  }

              }, 10 * 1000); */
