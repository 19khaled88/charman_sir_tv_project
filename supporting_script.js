
function getFormattedDateTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const now = new Date();

    const dayOfWeek = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0)
    `${dayOfWeek} ${day}, ${month} ${year}, ${hours}.${minutes} ${ampm}`

    return {day:`${dayOfWeek}`,date:`${day}`,month:`${month}`,year:`${year}`,hour:`${hours}`, minute:`${minutes}`, type:`${ampm}`};
}


function updateDateTime() {
    const dateTimeElement = document.getElementById("date_time");
    const formattedDateTime = getFormattedDateTime();

    // Insert the formatted date and time into the element
    dateTimeElement.innerHTML = `
        <div class="day_year" id="day_year">
            <span>
                <p class="day" id="day">${formattedDateTime.day}</p>
                <p class="date" id="date">${formattedDateTime.date}</p>
            </span>
            <span>
                <p class="month" id="month">${formattedDateTime.month}</p>
                <p class="year" id="year">${formattedDateTime.year}</p>
            </span>
        </div>
        
        <div class="time" id="time">
            <span>
                <p class="hour" id="hour">${formattedDateTime.hour}</p>
                <p>:</p>
                <p class="minute" id="minute">${formattedDateTime.minute} </p>
            </span>
            <p class="type" id="type">${formattedDateTime.type} </p>
        </div>
    `;


    const colorize = dateColorize();
    const dayYearDiv = document.getElementById('day_year')

    const firstSpan = dayYearDiv.querySelector('span:first-child');
    firstSpan.style.backgroundColor = colorize.lighter;
   

    const secondP = firstSpan.querySelector('p:nth-child(2)');
    secondP.style.backgroundColor = colorize.darker;
 

    const secondSpan = dayYearDiv.querySelector('span:nth-child(2)');
    secondSpan.style.backgroundColor = colorize.lighter;
    

    const secondP_ = secondSpan.querySelector('p:nth-child(1)');
    secondP_.style.backgroundColor = colorize.darker;
    
}


function scrollNewsHeadlines() {
    const headlines = [
        "Breaking: Stock market hits an all-time high.",
        "Sports: Local team wins the championship!",
        "Weather: Expect sunny skies all week long.",
        "Technology: New smartphone features unveiled.",
        "Health: Tips for staying fit this winter season.",
        "Travel: Top destinations for 2024 vacations."
    ];

    const newsContainer = document.getElementById("scrolling_text");
    const scrollingNewsContainer = document.getElementById("scrolling_news");
    let currentHeadlineIndex = 0;

    function updateHeadline() {
        // Set the headline text
        newsContainer.textContent = headlines[currentHeadlineIndex];

        // Reset animation
        newsContainer.style.animation = "none";

        // Wait for the DOM to update, then apply dynamic animation
        requestAnimationFrame(() => {
            const headlineWidth = newsContainer.offsetWidth; // Get the width of the headline
            const containerWidth = scrollingNewsContainer.offsetWidth; // Get the container width

            // Calculate animation duration based on the width of the headline
            const duration = (headlineWidth + containerWidth) / 100; // Adjust the speed factor here

            // Set animation dynamically
            newsContainer.style.animation = `scrollLeft ${duration}s linear infinite`;
        });

        // Update the index for the next headline
        currentHeadlineIndex = (currentHeadlineIndex + 1) % headlines.length;
    }

    // Initialize and update the headline every 10 seconds (to sync with animation)
    updateHeadline();
    setInterval(updateHeadline, 10000);
}


function scrollItems (){
    const headlines = [
        {Breaking:'Stock market hits an all-time high.'},
        {Sports:'Local team wins the championship!'},
        {Weather:'Expect sunny skies all week long..'},
        {Technology:'New smartphone features unveiled.'},
        {Health:'Tips for staying fit this winter season.'},
        {Travel:'Top destinations for 2024 vacations.'},
    ];

    const newsContainer = document.getElementById("scrolling_text");

    // Clear the existing content (if any)
    newsContainer.innerHTML = "";

    // Loop through the array and create individual headline elements
    headlines.forEach((headline) => {
        const category = Object.keys(headline)[0]; // e.g., Breaking, Sports, etc.
        const text = headline[category];
    
        // Create a new container for the headline and category
        const headlineContainer = document.createElement("div");
        headlineContainer.className = "headline_item"; // Add a class for styling
    
        // Create a <p> element for the category
        const categoryTitle = document.createElement("p");
        categoryTitle.textContent = `${category}`;
        categoryTitle.className = "category_title"; // Add a class for category styling
    
        // Create a <span> for the headline text
        const headlineText = document.createElement("span");
        headlineText.textContent = text;
        headlineText.className = "headline_text"; // Add a class for headline text styling



        const randomColor = colorize();
        headlineContainer.style.backgroundColor = randomColor.lighter;

        categoryTitle.style.backgroundColor = randomColor.darker;

       
        categoryTitle.style.padding = '20px 10px'
       
        headlineText.style.paddingRight = '20px'
    
        // Append the category and headline text to the container
        headlineContainer.appendChild(categoryTitle);
        headlineContainer.appendChild(headlineText);
    
        // Append the container to the main scrolling div
        newsContainer.appendChild(headlineContainer);

        
    });

    
    let time_news_scroll_height = 0;
    document.querySelectorAll('.headline_item').forEach((headline)=>{
        if(headline.offsetHeight > time_news_scroll_height){
            time_news_scroll_height = headline.offsetHeight;

        }
    })

    document.getElementById('time_newsScrolling').style.height = `${time_news_scroll_height + 20}px`;

    document.getElementById('scrolling_news').style.height = `${time_news_scroll_height + 20}px`;

    document.getElementById('news_text_label').style.height = `${time_news_scroll_height + 20}px`;

    document.querySelectorAll('.stock_market_price_scolling').forEach((element)=>{
        const divElements = element.querySelectorAll('div');
        divElements.forEach((div)=>{
            const firstSpan = div.querySelector('span:first-child')
            firstSpan.style.width = `${firstSpan.offsetHeight}px`
        })
    })


    scrolling(1,'scrolling_text');
   
}


function colorize(){
    colorPalatte =[ 
        // {
        //     darker:'#c18ff0',
        //     lighter:'#cda5f3',
        //     color:'',

        // },
        // {
        //     darker:'#caaa1c',
        //     lighter:'#f0de8f',
        //     color:'',

        // },
        // {
        //     darker:'#e78c4b',
        //     lighter:'#f0b78f',
        //     color:'',

        // },
        // {
        //     darker:'#fc7127',
        //     lighter:'#fdad81',
        //     color:'',

        // },
        // {
        //     darker:'#078d97',
        //     lighter:'#6deff8',
        //     color:'',

        // },
        // {
        //     darker:'#8800cc',
        //     lighter:'#e6b3ff',
        //     color:'',

        // },
        // {
        //     darker:'#ff00ff',
        //     lighter:'#ff99ff',
        //     color:'',

        // },
        // {
        //     darker:'#b2b300',
        //     lighter:'#ffff99',
        //     color:'',

        // },
        // {
        //     darker:'#e60067',
        //     lighter:'#ff80b9',
        //     color:'',

        // },
        // {
        //     darker:'#ff80b9',
        //     lighter:'#8eedf0',
        //     color:'',

        // },
        // {
        //     darker:'#519cc8',
        //     lighter:'#b1d3e7',
        //     color:'',

        // },
        // {
        //     darker:'#03adfc',
        //     lighter:'#81d6fe',
        //     color:'',

        // },
        // {
        //     darker:'#81d6fe',
        //     lighter:'#fcd4cf',
        //     color:'',

        // },

        {
            darker:'#C0C0C0',
            lighter:'',
            color:''
        }
    ]

    // Generate a random index to select a color from the palette
    const randomIndex = Math.floor(Math.random() * colorPalatte.length);
    const selectedColor = colorPalatte[randomIndex];

    // You can return either the 'darker' or 'lighter' color based on a condition
    // For example, return the 'darker' color
    return {darker:selectedColor.darker,lighter:selectedColor.lighter}
}


function dateColorize(){
    const colorPalatte = [
       
       
        {
            lighter:'#e4b3ff',
            darker:'#c14dff', 
        },
        {
            lighter:'#e77ed6',
            darker:'#e4b3ff', 
        },
        {
            lighter:'#facf85',
            darker:'#f6a823', 
        },
        
        {
            lighter:'#93ebb4',
            darker:'#53df86', 
        },
        {
            lighter:'#c99cb5',
            darker:'#a45b83', 
        },
        
        {
            lighter:'#94C973',
            darker:'#76B947', 
        },
    ]

     // Generate a random index to select a color from the palette
     const randomIndex = Math.floor(Math.random() * colorPalatte.length);
     const selectedColor = colorPalatte[randomIndex];
 
     // You can return either the 'darker' or 'lighter' color based on a condition
     // For example, return the 'darker' color
     return {darker:selectedColor.darker,lighter:selectedColor.lighter}
}

function stockMarketManagement(){
    const stock_market_price_scolling = document.getElementById('stock_market_price_scolling')
    if(stock_market_price_scolling){
        const dse_data = document.getElementById('dse_data')
        const cse_data = document.getElementById('cse_data')

        // Clear previous data
        dse_data.innerHTML = '';
        cse_data.innerHTML = '';

        stockMakrketData.forEach((markets)=>{
            markets.dse.forEach((market)=>{
                
                const companyName = market.company;
                const currentValue = market.current;
                const upDownValue = market.value;

                const percentage=((market.value /(currentValue - (market.value))) * 100).toFixed(2);

                
                let statusIcon;
                let color;
                let backgroundColor;
                let backgroundImage;
                let gradientBorder;
                let border;
                if (upDownValue > 0) {
                    statusIcon = 'trending_up'; 
                    color = 'green'; 
                    backgroundColor= '#3FE0DB';
                    backgroundImage= 'linear-gradient(135deg, #3FE0DB, #2CAF8A)';
                    border =''
                    gradientBorder = ''

                } else if (upDownValue < 0) {
                    statusIcon = 'trending_down';
                    color = 'red'; 
                    backgroundColor = '#FFBDB7';
                    backgroundImage = 'linear-gradient(135deg, #FFBDB7, #F23E75)';
                    border =''
                    gradientBorder = ''

                } else {
                    statusIcon = 'expand_all'; 
                    color = 'orange'; 
                    backgroundColor = '#515151';
                    backgroundImage = 'linear-gradient(135deg, #515151, #727272)';
                    border =''
                    gradientBorder = ''
                }

                const div = document.createElement('div');
                div.setAttribute('class','gradient-border')
                div.style.backgroundColor = backgroundColor;
                div.style.backgroundImage = backgroundImage;


                // div.innerHTML = `
                //     <span>
                //         <p>${companyName}</p>
                //         <p>${currentValue}</p>
                //     </span>
                //     <span style="color:${color}; backgroundColor:${backgroundColor};">
                //         <p class="material-icons material-symbols-outlined">${statusIcon}</p>
                //         <p>${percentage}${'%'}(${upDownValue})</p>
                //     <span>
                // `

                div.innerHTML = `
                    <span>
                        <p>${companyName}</p>
                        <p>${currentValue}</p>
                    </span>
                    <span style="color:${color}; backgroundColor:${backgroundColor};">
                        <p>${percentage}${'%'}</p>
                        <p>${upDownValue}</p>
                    </span>
                `
                dse_data.appendChild(div)
                
            });

            markets.cse.forEach((market)=>{
                
                const companyName = market.company;
                const currentValue = market.current;
                const upDownValue = market.value;

                const percentage=((market.value /(currentValue - (market.value))) * 100).toFixed(2);
                
                console.log(percentage)
                let statusIcon;
                let color;
                let backgroundColor;
                let backgroundImage;
                let gradientBorder;
                let border;
                if (upDownValue > 0) {
                    statusIcon = 'trending_up'; 
                    color = 'green'; 
                    backgroundColor= '#3FE0DB';
                    backgroundImage= 'linear-gradient(135deg, #3FE0DB, #2CAF8A)';
                    border =''
                    gradientBorder = ''

                } else if (upDownValue < 0) {
                    statusIcon = 'trending_down';
                    color = 'red'; 
                    backgroundColor = '#FFBDB7';
                    backgroundImage = 'linear-gradient(135deg, #FFBDB7, #F23E75)';
                    border =''
                    gradientBorder = ''

                } else {
                    statusIcon = 'expand_all'; 
                    color = 'orange'; 
                    backgroundColor = '#515151';
                    backgroundImage = 'linear-gradient(135deg, #515151, #727272)';
                    border =''
                    gradientBorder = ''
                }

                const div = document.createElement('div');
                div.setAttribute('class','gradient-border')
                div.style.backgroundColor = backgroundColor;
                div.style.backgroundImage = backgroundImage;
               

                div.innerHTML = `
                <span>
                    <p>${companyName}</p>
                    <p>${currentValue}</p>
                </span>
                <span style="color:${color}; backgroundColor:${backgroundColor};">
                    <p>${percentage > 0 ? `+${percentage}${'%'}` : percentage < 0 ? `${percentage}${'%'}` : `${percentage}${'%'}`}</p>
                    <p>${upDownValue > 0 ? `+${upDownValue}` : upDownValue < 0 ? `${upDownValue}` : upDownValue}</p>
                </span>
                `
                cse_data.appendChild(div)
                
            });
        })
    }

    scrolling(2,'dse_data');
    scrolling(2,'cse_data');
}

const stockMakrketData =[
    {
        "dse": [
          {
            "company": "Square Pharma",
            "current": 150,
            "value": +10
          },
          {
            "company": "GP",
            "current": 110,
            "value": 0
          },
          {
            "company": "ACI",
            "current": 120,
            "value": -5
          },
          {
            "company": "Beximco Pharma",
            "current": 100,
            "value": -2
          },
          {
            "company": "BRAC Bank",
            "current": 90,
            "value": -8
          },
          {
            "company": "Lafarge Holcim",
            "current": 90,
            "value": +5
          },
          {
            "company": "Renata",
            "current": 55,
            "value": +8
          },
          {
            "company": "Bri Amer Tobacco",
            "current": 63,
            "value": +5
          },
          {
            "company": "Summit Power",
            "current": 55,
            "value": -1
          },
          {
            "company": "BSRM",
            "current": 41,
            "value": +3
          },
          {
            "company": "Singer Bangladesh",
            "current": 92,
            "value": -6
          }
        ],
        "cse": [
         
          {
            "company": "GP",
            "current": 55,
            "value": +1
          },
          {
            "company": "Renata",
            "current": 45,
            "value": 0
          },
          {
            "company": "Square Pharma",
            "current": 70,
            "value": -10
          },
          {
            "company": "ACI",
            "current": 500,
            "value": -5
          },
          {
            "company": "Beximco Pharma",
            "current": 200,
            "value": 0
          },
          {
            "company": "BSRM",
            "current": 41,
            "value": 0
          },
          {
            "company": "Singer Bangladesh",
            "current": 92,
            "value": -6
          },
          {
            "company": "BRAC Bank",
            "current": 70,
            "value": +8
          },
          {
            "company": "Summit Power",
            "current": 25,
            "value": +1
          },
          {
            "company": "Lafarge Holcim",
            "current": 90,
            "value": -5
          },
          
          {
            "company": "Bri Amer Tobacco",
            "current": 63,
            "value": -5
          },
          
          
          
        ]
      }
      
]

function manageCardInfo(){
    const canvases = document.querySelectorAll('.lineChart');
    canvases.forEach((canvas)=>{
        fetchStockData().then(stockData =>{
            const ctx = canvas.getContext('2d'); 

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: stockData.labels,
                    datasets: [{
                        // label: 'Stock Price (USD)',
                        data: stockData.prices,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: false,
                            title: {
                                // display: true,
                                text: 'Price (USD)' // Y-axis title
                            }
                        },
                        x: {
                            title: {
                                // display: true,
                                text: 'Date' // X-axis title
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            // display: true,
                            position: 'top',
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        }
                    }
                }
            });
        });

       
    });

}

async function fetchStockData() {
    // const response = await fetch('https://api.example.com/stock-data?symbol=YOUR_STOCK_SYMBOL&interval=daily'); // Replace with actual API URL

    const labelList = [
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const priceList = [
        150, 160, 170, 180, 175, 190, 200 // Example stock prices over the months
    ];
    // const data = await response.json();

    // const labels = data.map(entry => entry.date); // Assuming your API returns date entries
    // const prices = data.map(entry => entry.price); // Assuming your API returns price entries

    const labels = labelList.map(date => date); // Assuming your API returns date entries
    const prices = priceList.map(price => price); // Assuming your API returns price entries

    return { labels, prices };
}

function scrolling(speedValue, scrollElement) {
    const off = 10; // Space between elements
    let l = 0; // Start position for the first element
    const marqueeElements = Array.from(document.querySelectorAll(`.${scrollElement} div`));
    const speed = speedValue;
    const stack = [];
    let pause = false;

    const marqueeContainer = document.querySelector(`.${scrollElement}`);
    const containerWidth = marqueeContainer.offsetWidth; // Width of the scrolling container
    let totalWidth = 0; // Total width of all scrolling elements

    
    marqueeElements.forEach(element => {
        const width = element.offsetWidth + off;
        element.style.left = `${l}px`;
        l += width;
        totalWidth += width; // Calculate total width of all elements
        stack.push(element);
    });

    // Ensure enough elements to fill the container
    while (totalWidth < containerWidth) {
        // marqueeElements.forEach(element => {
        //     const clone = element.cloneNode(true); // Clone the element
        //     const width = clone.offsetWidth + off;
        //     clone.style.left = `${l}px`;
        //     l += width;
        //     totalWidth += width;
        //     marqueeContainer.appendChild(clone); // Append clone to container
        //     stack.push(clone);
        // });

        for (let i = 0; i < marqueeElements.length && totalWidth < containerWidth; i++) {
            const clone = marqueeElements[i].cloneNode(true); // Clone the element
            const width = clone.offsetWidth + off;
            clone.style.left = `${l}px`;
            l += width;
            totalWidth += width;
            marqueeContainer.appendChild(clone); // Append clone to container
            stack.push(clone);
        }
    }

    function moveMarquee() {
        if (!pause) {
            stack.forEach(element => {
                const currentLeft = parseFloat(getComputedStyle(element).left);
                const newLeft = currentLeft - speed;
                element.style.left = `${newLeft}px`;

                if (newLeft + element.offsetWidth < 0) {
                    const lastElement = stack[stack.length - 1];
                    element.style.left = `${parseFloat(getComputedStyle(lastElement).left) + lastElement.offsetWidth + off}px`;
                    stack.push(stack.shift()); // Move the first element to the end of the stack
                }
            });
        }
        requestAnimationFrame(moveMarquee);
    }

    requestAnimationFrame(moveMarquee);

    // Pause scrolling on hover
    marqueeContainer.addEventListener('mouseover', () => {
        pause = true;
    });
    marqueeContainer.addEventListener('mouseout', () => {
        pause = false;
    });
}


// function drawCurveTypes() {
//     var data = new google.visualization.DataTable();
//     data.addColumn('number', 'X');
//     data.addColumn('number', 'Dogs');
//     data.addColumn('number', 'Cats');

//     data.addRows([
//       [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
//       [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
//       [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
//       [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
//       [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
//       [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
//       [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
//       [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
//       [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
//       [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
//       [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
//       [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
//     ]);

//     var options = {
//       hAxis: {
//         title: 'Time'
//       },
//       vAxis: {
//         title: 'Popularity'
//       },
//       series: {
//         1: {curveType: 'function'}
//       }
//     };

//     var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
//   }

