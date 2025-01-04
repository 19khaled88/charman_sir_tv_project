
let allNewsData = []

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

    
    dateTimeElement.innerHTML = `
        <div class="day_year" id="day_year">
            <span>
                <p class="day" id="day">${formattedDateTime.day}</p>
                
            </span>
            <span>
            <p class="date" id="date">${formattedDateTime.date}</p>
            <p class="month" id="month">${formattedDateTime.month}</p>
            </span>
            <span>
                <p class="year" id="year">${formattedDateTime.year}</p>
            </span>
        </div>
        <div class="clock_section" id="clock_section">
            <svg id='clock' viewBox='0 36 122 36' xmlns='http://www.w3.org/2000/svg'>
                <g id='seconds'>
                <g>
                    <path id='f7' d='M106,69l3-3h6l3,3c0,0-1,1-3,1h-6C107,70,106,69,106,69z' fill='white'/>
                    <path id='f6' d='M119,55l-3,2v8l3,3c0,0,1-1,1-3v-7C120,56,119,55,119,55z' fill='white'/>
                    <path id='f5' d='M105,55l3,2v8l-3,3c0,0-1-1-1-3v-7C104,56,105,55,105,55z' fill='white'/>
                    <polygon id='f4' points='109,52 115,52 118,54 115,56 109,56 106,54' fill='white'/>
                    <path id='f3' d='M119,40l-3,3v8l3,2c0,0,1-1,1-3v-7C120,41,119,40,119,40z' fill='white'/>
                    <path id='f2' d='M105,40l3,3v8l-3,2c0,0-1-1-1-3v-7C104,41,105,40,105,40z' fill='white'/>
                    <path id='f1' d='M106,39l3,3h6l3-3c0,0-1-1-3-1h-6C107,38,106,39,106,39z' fill='white'/>
                </g>
                <g>
                    <path id='e7' d='M88,69l3-3h6l3,3c0,0-1,1-3,1h-6C89,70,88,69,88,69z' fill='white'/>
                    <path id='e6' d='M101,55l-3,2v8l3,3c0,0,1-1,1-3v-7C102,56,101,55,101,55z' fill='white'/>
                    <path id='e5' d='M87,55l3,2v8l-3,3c0,0-1-1-1-3v-7C86,56,87,55,87,55z' fill='white'/>
                    <polygon id='e4' points='91,52 97,52 100,54 97,56 91,56 88,54' fill='white'/>
                    <path id='e3' d='M101,40l-3,3v8l3,2c0,0,1-1,1-3v-7C102,41,101,40,101,40z' fill='white'/>
                    <path id='e2' d='M87,40l3,3v8l-3,2c0,0-1-1-1-3v-7C86,41,87,40,87,40z' fill='white'/>
                    <path id='e1' d='M88,39l3,3h6l3-3c0,0-1-1-3-1h-6C89,38,88,39,88,39z' fill='white'/>
                </g>
                </g>
                <g id='minutes'>
                <g>
                    <path id='d7' d='M64,69l3-3h6l3,3c0,0-1,1-3,1h-6C65,70,64,69,64,69z' fill='white'/>
                    <path id='d6' d='M77,55l-3,2v8l3,3c0,0,1-1,1-3v-7C78,56,77,55,77,55z' fill='white'/>
                    <path id='d5' d='M63,55l3,2v8l-3,3c0,0-1-1-1-3v-7C62,56,63,55,63,55z' fill='white'/>
                    <polygon id='d4' points='67,52 73,52 76,54 73,56 67,56 64,54' fill='white'/>
                    <path id='d3' d='M77,40l-3,3v8l3,2c0,0,1-1,1-3v-7C78,41,77,40,77,40z' fill='white'/>
                    <path id='d2' d='M63,40l3,3v8l-3,2c0,0-1-1-1-3v-7C62,41,63,40,63,40z' fill='white'/>
                    <path id='d1' d='M64,39l3,3h6l3-3c0,0-1-1-3-1h-6C65,38,64,39,64,39z' fill='white'/>
                </g>
                <g>
                    <path id='c7' d='M46,69l3-3h6l3,3c0,0-1,1-3,1h-6C47,70,46,69,46,69z' fill='white'/>
                    <path id='c6' d='M59,55l-3,2v8l3,3c0,0,1-1,1-3v-7C60,56,59,55,59,55z' fill='white'/>
                    <path id='c5' d='M45,55l3,2v8l-3,3c0,0-1-1-1-3v-7C44,56,45,55,45,55z' fill='white'/>
                    <polygon id='c4' points='49,52 55,52 58,54 55,56 49,56 46,54' fill='white'/>
                    <path id='c3' d='M59,40l-3,3v8l3,2c0,0,1-1,1-3v-7C60,41,59,40,59,40z' fill='white'/>
                    <path id='c2' d='M45,40l3,3v8l-3,2c0,0-1-1-1-3v-7C44,41,45,40,45,40z' fill='white'/>
                    <path id='c1' d='M46,39l3,3h6l3-3c0,0-1-1-3-1h-6C47,38,46,39,46,39z' fill='white'/>
                </g>
                </g>
                <g id='hours'>
                <g>
                    <path id='b7' d='M22,69l3-3h6l3,3c0,0-1,1-3,1h-6C23,70,22,69,22,69z' fill='white'/>
                    <path id='b6' d='M35,55l-3,2v8l3,3c0,0,1-1,1-3v-7C36,56,35,55,35,55z' fill='white'/>
                    <path id='b5' d='M21,55l3,2v8l-3,3c0,0-1-1-1-3v-7C20,56,21,55,21,55z' fill='white'/>
                    <polygon id='b4' points='25,52 31,52 34,54 31,56 25,56 22,54' fill='white'/>
                    <path id='b3' d='M35,40l-3,3v8l3,2c0,0,1-1,1-3v-7C36,41,35,40,35,40z' fill='white'/>
                    <path id='b2' d='M21,40l3,3v8l-3,2c0,0-1-1-1-3v-7C20,41,21,40,21,40z' fill='white'/>
                    <path id='b1' d='M22,39l3,3h6l3-3c0,0-1-1-3-1h-6C23,38,22,39,22,39z' fill='white'/>
                </g>
                <g>
                    <path id='a7' d='M4,69l3-3h6l3,3c0,0-1,1-3,1h-6C5,70,4,69,4,69z' fill='white'/>
                    <path id='a6' d='M17,55l-3,2v8l3,3c0,0,1-1,1-3v-7C18,56,17,55,17,55z' fill='white'/>
                    <path id='a5' d='M3,55l3,2v8l-3,3c0,0-1-1-1-3v-7C2,56,3,55,3,55z' fill='white'/>
                    <polygon id='a4' points='7,52 13,52 16,54 13,56 7,56 4,54' fill='white'/>
                    <path id='a3' d='M17,40l-3,3v8l3,2c0,0,1-1,1-3v-7C18,41,17,40,17,40z' fill='white'/>
                    <path id='a2' d='M3,40l3,3v8l-3,2c0,0-1-1-1-3v-7C2,41,3,40,3,40z' fill='white'/>
                    <path id='a1' d='M4,39l3,3h6l3-3c0,0-1-1-3-1h-6C5,38,4,39,4,39z' fill='white'/>
                </g>
                </g>
                <g id='dots' fill='white'>
                <g>
                    <circle cx='82' cy='50' r='2'/>
                    <circle cx='82' cy='58' r='2'/>
                </g>
                <g>
                    <circle cx='40' cy='50' r='2'/>
                    <circle cx='40' cy='58' r='2'/>
                </g>
                </g>
            </svg>
            <p>${formattedDateTime.type}</p>
        </div>
    `;


    // const colorize = dateColorize();
    // const dayYearDiv = document.getElementById('day_year')

    // const firstSpan = dayYearDiv.querySelector('span:first-child');
    // firstSpan.style.backgroundColor = colorize.lighter;
   

    // const secondP = firstSpan.querySelector('p:nth-child(2)');
    // secondP.style.backgroundColor = colorize.darker;
 

    // const secondSpan = dayYearDiv.querySelector('span:nth-child(2)');
    // secondSpan.style.backgroundColor = colorize.lighter;
    

    // const secondP_ = secondSpan.querySelector('p:nth-child(1)');
    // secondP_.style.backgroundColor = colorize.darker;
    
}


// function scrollNewsHeadlines() {
//     const headlines = [
//         "Breaking: Stock market hits an all-time high.",
//         "Sports: Local team wins the championship!",
//         "Weather: Expect sunny skies all week long.",
//         "Technology: New smartphone features unveiled.",
//         "Health: Tips for staying fit this winter season.",
//         "Travel: Top destinations for 2024 vacations."
//     ];

//     const newsContainer = document.getElementById("scrolling_text");
//     const scrollingNewsContainer = document.getElementById("scrolling_news");
//     let currentHeadlineIndex = 0;
    
//     function updateHeadline() {
//         // Set the headline text

        
//         newsContainer.textContent = headlines[currentHeadlineIndex];

//         // Reset animation
//         newsContainer.style.animation = "none";

//         // Wait for the DOM to update, then apply dynamic animation
//         requestAnimationFrame(() => {
//             const headlineWidth = newsContainer.offsetWidth; // Get the width of the headline
//             const containerWidth = scrollingNewsContainer.offsetWidth; // Get the container width

//             // Calculate animation duration based on the width of the headline
//             const duration = (headlineWidth + containerWidth) / 100; // Adjust the speed factor here

//             // Set animation dynamically
//             newsContainer.style.animation = `scrollLeft ${duration}s linear infinite`;
//         });

//         // Update the index for the next headline
//         currentHeadlineIndex = (currentHeadlineIndex + 1) % headlines.length;
//     }

//     // Initialize and update the headline every 10 seconds (to sync with animation)
//     updateHeadline();
//     setInterval(updateHeadline, 10000);
 
// }


async function scrollItems (){

    let news = []

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

    const apiUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://m.khasruopc.com/api/kdashboard/news');

    async function fetchNews() {
      try {
        const response = await fetch(apiUrl);
       
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        
        // Parse JSON data
        const data = await response.json();
        
        // Access the actual contents of the news
        const newsData = JSON.parse(data.contents); // Parse the contents string into JSON
      
        // console.log(newsData)
        // return newsData
        news = newsData

      } catch (error) {
        news = [{atn:1111,head:'Wating long to fetch news',content:''}]
      }
    }

    fetchNews()

    if(news.length > 0){
        news.forEach((contents)=>{
            const head = Object.keys(contents)[1]; // e.g., Breaking, Sports, etc.
            const headline = contents[head]; 
            

            // Create a new container for the headline and category
            const headlineContainer = document.createElement("div");
            headlineContainer.className = "headline_item"; // Add a class for styling
        
            // Create a <p> element for the category
            const categoryTitle = document.createElement("p");
            categoryTitle.textContent = `${head}`;
            categoryTitle.className = "category_title"; // Add a class for category styling
        
            // Create a <span> for the headline text
            const headlineText = document.createElement("span");
            headlineText.textContent = headline;
            headlineText.className = "headline_text"; // Add a class for headline text styling
            headlineText.style =`margin-left:5px;margin-right:5px;font-size:20px; border-right:4px solid white`


            const randomColor = colorize();
            headlineContainer.style.backgroundColor = randomColor.lighter;

            categoryTitle.style.backgroundColor = randomColor.darker;

        
            categoryTitle.style.padding = '20px 10px'
        
            headlineText.style.paddingRight = '20px'
        
        
            // headlineContainer.appendChild(categoryTitle);
            headlineContainer.appendChild(headlineText);
        
            // Append the container to the main scrolling div
            newsContainer.appendChild(headlineContainer);
        })




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
    else{
        // Create a new container for the headline and category
        const headlineContainer = document.createElement("div");
        headlineContainer.className = "fixed_headline_item"; // Add a class for styling
    
    
        // Create a <span> for the headline text
        const headlineText = document.createElement("span");
        headlineText.textContent = 'Waiting for News';
        headlineText.className = "headline_text"; // Add a class for headline text styling
        headlineText.style =`margin-left:5px;margin-right:5px;font-size:20px; border-right:4px solid white`

        const scrolling_text = document.getElementById('scrolling_text');
        scrolling_text.style =`width:100%;justify-content: center;`

        const randomColor = colorize();
        headlineContainer.style.backgroundColor = randomColor.lighter;
        headlineContainer.style.color = 'white'
        
       
        headlineText.style.paddingRight = '20px'
    
     
      
        headlineContainer.appendChild(headlineText);
    
        // Append the container to the main scrolling div
        newsContainer.appendChild(headlineContainer); 
        headlineContainer.querySelector('span').style = 'border-right:none'
    }
    

    
   
   
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
        const dse_data = document.getElementById('dse_data');
        const cse_data = document.getElementById('cse_data');
        

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




// const apiUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://m.khasruopc.com/api/kdashboard/news');

// async function fetchNews() {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`Network response was not ok, status: ${response.status}`);
//     }
//     const data = await response.json(); // Parse JSON data
//     console.log(data.contents); // Access the actual data inside contents
//   } catch (error) {
//     console.error('Error fetching news:', error); // Handle errors
//   }
// }

// fetchNews();











  









