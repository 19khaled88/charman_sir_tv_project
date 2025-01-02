




// Set date and time on page load
document.addEventListener("DOMContentLoaded", async() => {
    

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawCurveTypes);

    
    
    updateDateTime();
    // setInterval(updateDateTime,6000);
   
    scrollItems();

  

    stockMarketManagement();

    

    function drawCurveTypes() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X'); // X-axis
        data.addColumn('number', 'Up Trend'); // Values for upward trends
        data.addColumn('number', 'Down Trend'); // Values for downward trends
    
        // Original data rows
        var rows = [
            [0, 0], [1, 10], [2, 23], [3, 17], [4, 18],
            [5, 9], [6, 11], [7, 27], [8, 33], [9, 40],
            [10, 32], [11, 35], [12, 30], [13, 40],
            [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55],
            [22, 56], [23, 57], [24, 60], [25, 50],
            [26, 52], [27, 51], [28, 49], [29, 53],
            [30, 55], [31, 60], [32, 61], [33, 59],
            [34, 62], [35, 65], [36, 62], [37, 58],
            [38, 55], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69],
            [46, 69], [47, 70], [48, 72], [49, 68],
            [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75],
            [58, 70], [59, 68], [60, 64], [61, 60],
            [62, 65], [63, 67], [64, 68], [65, 69],
            [66, 70], [67, 72], [68, 75], [69, 80]
        ];
    
        // Create rows with conditional values for up and down trends
        var conditionalRows = [];
        for (let i = 0; i < rows.length; i++) {
            const currentValue = rows[i][1];
            const previousValue = i > 0 ? rows[i - 1][1] : null;
    
            if (previousValue !== null) {
                if (currentValue > previousValue) {
                    // Up trend
                    conditionalRows.push([rows[i][0], currentValue, null]);
                } else if (currentValue < previousValue) {
                    // Down trend
                    conditionalRows.push([rows[i][0], null, currentValue]);
                } else {
                    // No change
                    conditionalRows.push([rows[i][0], null, null]);
                }
            } else {
                // First row, no trend comparison
                conditionalRows.push([rows[i][0], currentValue, null]);
            }
        }
    
        // Add processed rows to the DataTable
        data.addRows(conditionalRows);
    
        // Chart options
        var options = {
            hAxis: {gridlines: { color: 'none' },baselineColor: 'none',textPosition: 'none', },
            vAxis: { gridlines: { color: 'none' },baselineColor: 'none', textPosition: 'none' },
            legend: { position: 'none' },
            chartArea: {
                width: '100%',
                height: '100%',
            },
            series: {
                0: { color: 'green', lineWidth: 2 }, // Up trend line
                1: { color: 'red', lineWidth: 2 },   // Down trend line
            },
            areaOpacity:0

        };
    
        // Draw the chart in each chart container
        const charts = document.querySelectorAll('.chart_div');
        charts.forEach((chartDiv) => {
            var chart = new google.visualization.LineChart(chartDiv);
            chart.draw(data, options);

           
            const rects = chartDiv.querySelectorAll('svg rect');
            rects.forEach((rect)=>{
                rect.setAttribute('fill','white');
            })
            
        });

        
    }
    
    
    // const news =await fetchNews();
    // if(news !=undefined){
    //     console.log(news)
    // }
});








