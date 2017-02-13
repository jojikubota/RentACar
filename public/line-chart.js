function loadLinechart(){
			chart = new Highcharts.Chart({
				chart: {
					renderTo: 'line-container',
					defaultSeriesType: 'line',
					margin: [50, 150, 60, 80]
				},
				title: {
					text: 'Peak Booking Times',
					style: {
						margin: '10px 100px 0 0' // center it
					}
				},
				subtitle: {
					text: '',
					style: {
						margin: '0 100px 0 0' // center it
					}
				},
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					title: {
						text: 'Month'
					}
				},
				yAxis: {
					title: {
						text: 'Bookings'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					formatter: function() {
			                return '<b>'+ this.series.name +'</b><br/>'+
							this.x +': '+ this.y;
					}
				},
				legend: {
					layout: 'vertical',
					style: {
						left: 'auto',
						bottom: 'auto',
						right: '10px',
						top: '100px'
					}
				},
				series: [{
					name: '2014',
					data: [50, 40, 35, 50, 60, 100, 70, 65, 75,130, 60]
				}, {
					name: '2015',
					data: [60, 35, 45, 55, 70, 120, 80, 85, 90, 100, 140, 80]
				}, {
					name: '2016',
					data: [65, 50, 60, 75, 100, 150, 120, 95, 100, 120, 220]
				}
				]
			});
			
			
		}
