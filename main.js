function handleWeather(){
const searchInput = document.querySelector('.city-search_input').value;
const api = "http://api.openweathermap.org/data/2.5/weather?q=";
const key="19531f89e9530005f79d5223a7de63ee";



if(searchInput == ''){
  console.log("Podaj nazwę miasta")
}
else{
fetch(`${api}${searchInput}&units=metric&appid=${key}`)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    const weatherDescription = document.querySelector('.weather_description');
    const weatherDescriptionApi = data.weather[0].description;
    const weatherIconApi = data.weather[0].icon;
    const weatherIcon = document.querySelector(".weather_icon");
    const iconSrc=`http://openweathermap.org/img/wn/${weatherIconApi}@2x.png`;
    const temp = document.querySelector(".weather_temp");
    const tempApi = data.main.temp;
    const wind = document.querySelector(".weather_wind");
    const windSpeedApi = data.wind.speed;
    const pressure = document.querySelector(".weather_pressure");
    const pressureApi = data.main.pressure;


    weatherIcon.src = iconSrc;
    weatherDescription.innerHTML = weatherDescriptionApi;
    temp.innerHTML = `${tempApi} °C`;
    wind.innerHTML = `${windSpeedApi} m/s`;
    pressure.innerHTML = `${pressureApi} hPa` ;

  })
  .catch(err => {
    console.log(err);
  });


}
}

