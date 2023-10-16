// Display current day and time - works

let now = new Date();

function formatDate(now) {
  let hours = now.getHours();

  console.log(hours);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  console.log(hours); //doesn't work

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];

  let currentDateTime = document.querySelector("#current-date");
  currentDateTime.innerHTML = `${day} ${hours}:${minutes}`;
}

formatDate(now);

// Display the city name on the page and temperature

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", printCity);

function printCity(event) {
  event.preventDefault();
  let city = document.querySelector("h1");
  let searchFieldValue = document.querySelector("#search-feild");
  city.innerHTML = searchFieldValue.value;

  let apiLink = "https://api.openweathermap.org/data/2.5/weather?";
  let apiKey = "97bed167ec49bff56e6c1b63daef9c86";
  let units = "metric";

  axios
    .get(`${apiLink}q=${searchFieldValue.value}&appid=${apiKey}&units=${units}`)
    .then(showTemp);
}

function showTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp-degree");
  temp.innerHTML = `${currentTemp}`;
}

//On button hit use the Geolocation API to get your GPS coordinates
//and display and the city
//and current temperature using the OpenWeather API.

function triggerCurrentButton() {
  navigator.geolocation.getCurrentPosition(calculatePosition);
}

function calculatePosition(coordinates) {
  let lat = coordinates.coords.latitude;
  let long = coordinates.coords.longitude;
  console.log(lat);
  console.log(long);
}
triggerCurrentButton();

/* Convert temp to Fahrenheit and back

let fahrenheit = document.querySelector("#temp-f");
fahrenheit.addEventListener("click", fahToCelc);

function fahToCelc() {
  let tempC = 17;
  let tempF = tempC * 2 + 30;
  let tempDegree = document.querySelector("#temp-degree");
  tempDegree.innerHTML = `${tempF}`;
}

let celcium = document.querySelector("#temp-c");
celcium.addEventListener("click", celcToFah);

function celcToFah() {
  let tempF = 64;
  let tempC = (tempF - 30) / 2;
  let tempDegree = document.querySelector("#temp-degree");
  tempDegree.innerHTML = `${tempC}`;
}


*/
