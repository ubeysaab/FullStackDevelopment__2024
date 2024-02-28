const x = document.querySelector(".daily");
const y = document.querySelector(".current");
let lat;
let lon;
const WEATHERAPI_URL = "https://api.openweathermap.org/data/2.5/forecast";
const WEATHERAPI_KEY = "b1e90c2c232e0f0b41d0025519f61392";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  // }
}

async function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  fetch(
    `${WEATHERAPI_URL}?lat=${lat}&lon=${lon}&appid=${WEATHERAPI_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => handleData(data));

  setInterval(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHERAPI_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => handleCurrent(data));
    
  }, 10000);
}

function handleCurrent(data) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds
  let currentTime = new Date(data.dt * 1000);
  console.log("handle current ", data);
  console.log("current time ", currentTime);

  y.innerHTML = `

      <div class="weather">
  
        <div class="top ">
          <div>
            <p class="city">${data.name}</p>
            <p class="weather-description">${data.weather[0].description}</p>
            <p class="weather-description">${currentTime.toLocaleString()}</p>

          </div>
          <img
            alt="weather"
            class="weather-icon"
            src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"
          />
        </div>
  
        <div class="bottom ">
          <p class="temperature">${Math.round(data.main.temp)}°C</p>
          <div class="details ">
            <div class="parameter-row">
              <span class="parameter-label">Details</span>
            </div>
            <div class="parameter-row">
              <span class="parameter-label">Feels like</span>
              <span class="parameter-value">
                ${Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div class="parameter-row >
              <span class="parameter-label">Wind</span>
              <span class="parameter-value">${data.wind.speed} m/s</span>
            </div>
            <div class="parameter-row">
              <span class="parameter-label">Humidity</span>
              <span class="parameter-value">${data.main.humidity}%</span>
            </div>
            <div class="parameter-row">
              <span class="parameter-label">Pressure</span>
              <span class="parameter-value">${data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
  
      </div>
  
    `;
}

function handleData(data) {
  console.log(data);
  console.log(data.city.name.split(" ")[0]);
  console.log(data.list);
  let city = data.city.name.split(" ")[0];
  console.log(data.list);
  data.list.forEach((element, i) => {
    if (i % 8 == 0 && i >= 8&& i<32) {
      x.innerHTML += `

      <div class="weather">
  
        <div class="top ">
          <div>
            <p class="city">${city}</p>
            <p class="weather-description">${element.weather[0].description}</p>
             <p class="weather-description">${
               element["dt_txt"].split(" ")[0]
             }</p>
          </div>
          <img
            alt="weather"
            class="weather-icon"
            src="http://openweathermap.org/img/w/${element.weather[0].icon}.png"
          />
        </div>
  
        <div class="bottom ">
          <p class="temperature">${Math.round(element.main.temp)}°C</p>
          <div class="details ">
            <div class="parameter-row">
              <span class="parameter-label">Details</span>
            </div>
            <div class="parameter-row">
              <span class="parameter-label">Feels like</span>
              <span class="parameter-value">
                ${Math.round(element.main.feels_like)}°C
              </span>
            </div>
            <div class="parameter-row >
              <span class="parameter-label">Wind</span>
              <span class="parameter-value">${element.wind.speed} m/s</span>
            </div>
            <div class="parameter-row">
              <span class="parameter-label">Humidity</span>
              <span class="parameter-value">${element.main.humidity}%</span>
            </div>
            <div class="parameter-row">
              <span class="parameter-label">Pressure</span>
              <span class="parameter-value">${element.main.pressure} hPa</span>
            </div>
          </div>
        </div>
  
      </div>
  
    `;
    }
    // console.log(element);
  });
}

getLocation();

{
  /* <div class="card">
<div class="container__up flex">
  <div>
    <h4>${city}</h4>
    <p>${element.weather[0].main}</p>
    <p>${element.weather[0].description}</p>
  </div>
  <div>
    <img src="http://openweathermap.org/img/w/${element.weather[0].icon}.png" alt="">
    <p>${Math.floor(element.main["temp_min"])}/${Math.floor(element.main["temp_min"])}</p>
  </div>
</div>
<div class="content">

</div>
</div> */
}
