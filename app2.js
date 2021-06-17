const weatherApi={
    key:"6eddfcb7ad3d4370cd2088a5e81ebca7",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
 
const searchInputBox=document.getElementById("input-box");
searchInputBox.addEventListener('keypress',(event)=>{
     
  if(event.keyCode==13){
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
 }
});
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
  }).then(showWeatherReport);
}
function showWeatherReport(weather){
    console.log(weather);  
    let city=document.getElementById("city");
    city.innerText=`${weather.name},${weather.sys.country}`;
    
    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
    
    let minMaxTemp=document.getElementById("min-max");
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_min)}&deg;C (max)}`;
    
    let weatherType=document.getElementById("weather");
    weatherType.innerText=`${weather.weather[0].main}`;
    
    let date=document.getElementById("date");
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    if(weatherType.textContent=="Mist"){
        document.body.style.backgroundImage="url(images/wa14.jpeg)";
    }else if(weatherType.textContent=="Clear"){
        document.body.style.backgroundImage="url(images/wa10.jpeg)";
    }else if(weatherType.textContent=="Clouds"){
        document.body.style.backgroundImage="url(images/wa11.jpeg)";
    }else if(weatherType.textContent=="Rain"){
            document.body.style.backgroundImage="url(images/wa16.jpeg)";
    }else if(weatherType.textContent=="Haze"){
        document.body.style.backgroundImage="url(images/wa19.jpeg)"};


function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wedday","Thursday","Friday","Satday"];
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}),${year}`;
}
}