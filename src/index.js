function displayCityDetail(event) {
  let cityTimeZone = event.target.value;
  let dateDisplay = moment().tz(cityTimeZone).format("MMMM D, YYYY");
  let timeDisplay = moment().tz(cityTimeZone).format("H:mm:ss A");

  let cityName = cityTimeZone.split("/")[1];
  cityName = cityName.replace("_", " ");
  let countryName = "";

  if (cityName === "Paris") {
    countryName = "France";
  } else if (cityName === "London") {
    countryName = "United Kingdom";
  } else if (cityName === "Kolkata") {
    cityName = "Mumbai";
    countryName = "India";
  } else if (cityName === "New York") {
    countryName = "USA";
  }

  let cityelement = document.querySelector(".city-container");
  cityelement.innerHTML = `<div class="city-detail">
          <div class="city-name">
            <h2 class="city1">${cityName}</h2>
            <p class="country1">${countryName}</p>
          </div>
          <div class="city-time">
            <h2 class="city1-time">${timeDisplay}</h2>
            <p class="city1-date">${dateDisplay}</p>
          </div>
        </div>`;
}

// Adding the time and date for city1 and 2
function displayCityDate() {
  let city1 = document.querySelector("#city1");
  let city1DateElement = document.querySelector(".city1-date");
  let city1TimeElement = document.querySelector(".city1-time");

  if (city1) {
    let city1Date = moment().tz("Australia/Sydney").format("MMMM D, YYYY");
    let city1Time = moment().tz("Australia/Sydney").format("H:mm:ss A");

    city1DateElement.innerHTML = city1Date;
    city1TimeElement.innerHTML = city1Time;
  }

  let city2 = document.querySelector("#city2");
  let city2DateElement = document.querySelector(".city2-date");
  let city2TimeElement = document.querySelector(".city2-time");
  if (city2) {
    let city2Date = moment().tz("Asia/Tokyo").format("MMMM D, YYYY");
    let city2Time = moment().tz("Asia/Tokyo").format("H:mm:ss A");

    city2DateElement.innerHTML = city2Date;
    city2TimeElement.innerHTML = city2Time;
  }
}

// Adding the city and country name for city1 & 2
function displayCityName() {
  let city1NameElement = document.querySelector(".city1");
  let country1NameElement = document.querySelector(".country1");
  let city2NameElement = document.querySelector(".city2");
  let country2NameElement = document.querySelector(".country2");

  city1NameElement.innerHTML = "Sydney";
  country1NameElement.innerHTML = "Australia";

  city2NameElement.innerHTML = "Tokyo";
  country2NameElement.innerHTML = "Japan";
}

displayCityDate();
displayCityName();
setInterval(displayCityDate, 1000);

//Displaying the city and country details for the dropdown selection

let cityDropdownElement = document.querySelector("#cities");
cityDropdownElement.addEventListener("change", displayCityDetail);
