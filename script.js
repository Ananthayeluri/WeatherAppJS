const api= {
    App_Key:"1c03f08f58a4faec29f042d6a7367c22",
    base:"https://api.openweathermap.org/data/2.5/"
    }

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
   fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.App_Key}`)
   .then((weather) => weather.json())
   .then(displayResults);
}



function displayResults(weather){
 console.log(weather);
 let city = document.querySelector('.location .city');
 city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(weather.main.temp)}`+'°c';
  let weather_el =  document.querySelector('.current .weather');
  weather_el.innerText = `${weather.weather[0].main}`;
  let hi_low = document.querySelector('.hi-low');
  hi_low.innerText =`${Math.round(weather.main.temp_min)}°c/ ${Math.round(weather.main.temp_max)}°c`;
  let icon_image=document.querySelector('.icons');
  if (`${weather.weather[0].main}`=== 'Clouds'){
      document.body.style.backgroundImage = "url('./images/clouds.gif')";
      document.body.style.textColor = "black";
      
  }
  else if (`${weather.weather[0].main}`=== 'Clear'){
    document.body.style.backgroundImage = "url('./images/bluesky.gif')";
 }
  else if (`${weather.weather[0].main}`=== 'Rain'){
    document.body.style.backgroundImage = "url('./images/rain.gif')";
}
else if (`${weather.weather[0].main}`=== 'Haze'){
    document.body.style.backgroundImage = "url('./images/haze.jpg')";
}
else if (`${weather.weather[0].main}`=== 'Snow'){
    document.body.style.backgroundImage = "url('./images/snow.gif')";
}

else 
    document.body.style.backgroundImage = "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)";
}

   function dateBuilder (d) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }
   

   