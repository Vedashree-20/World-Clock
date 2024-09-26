// Adding the time and date for city1 and 2
function displayCityDate() {
  let city1DateElement = document.querySelector("#city1-date");
  let city1TimeElement = document.querySelector("#city1-time");

  let city2DateElement = document.querySelector("#city2-date");
  let city2TimeElement = document.querySelector("#city2-time");

  let city1Date = moment().tz("Australia / Sydney").format("MMMM D, YYYY");
  let city1Time = moment()
    .tz("Australia/Sydney")
    .format("H:mm:ss [<small>] A [<small>]");

  let city2Date = moment().tz("Asia/Tokyo").format("MMMM D, YYYY");
  let city2Time = moment()
    .tz("Asia/Tokyo")
    .format("H:mm:ss [<small>] A [<small>]");

  city1DateElement.innerHTML = city1Date;
  city1TimeElement.innerHTML = city1Time;

  city2DateElement.innerHTML = city2Date;
  city2TimeElement.innerHTML = city2Time;
}

// Adding the city and country name for city1 & 2
function displayCityName() {
  let city1NameElement = document.querySelector("#city1");
  let country1NameElement = document.querySelector("#country1");
  let city2NameElement = document.querySelector("#city2");
  let country2NameElement = document.querySelector("#country2");

  city1NameElement.innerHTML = "Sydney";
  country1NameElement.innerHTML = "Australia";

  city2NameElement.innerHTML = "Tokyo";
  country2NameElement.innerHTML = "Japan";
  setInterval(displayCityDate, 1000);
}
displayCityDate();
displayCityName();
