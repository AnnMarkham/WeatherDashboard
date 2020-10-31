var getCityWeather = function (city) {
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=c5f163a6903bc47e2936fd40702fea5f"
  //make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {

      console.log(data)

      $(".card-header").text(data.name)
      var tbody = $(".todayCardBody tbody").empty();
      tbody.append("<tr><th>Temperature:</th><td>" + data.main.temp + " Degrees F" + "</td></tr>");
      tbody.append("<tr><th>Humidity:</th><td>" + data.main.humidity + "%" + "</td></tr>");
      tbody.append("<tr><th>Wind Speed:</th><td>" + data.wind.speed + "MPH" + "</td></tr>");
      tbody.append("<tr><th>UV Index: </th><td>" + "PlaceHolder" + "</td></tr>");
    })
  })
};
var searchFormEl = document.querySelector("#searchForm");
var searchInputEl = document.querySelector("#city");
var formSubmitHandler = function (event) {
  event.preventDefault();//prevents browser from sending info to url.  need to create a way to do this separately, or figure out how to connect this to submit request for weather Api
  var city = searchInputEl.value.trim();
  if (city) {
    getCityWeather(city);
    searchInputEl.value = "";
  }
  else
    alert("Please enter a valid US city name")
};

searchFormEl.addEventListener("submit", formSubmitHandler);



