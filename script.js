var searchFormEl = document.querySelector("#searchForm");
var searchInputEl = document.querySelector("#city");





var getCityWeather = function (city) {

  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=c5f163a6903bc47e2936fd40702fea5f"
  //make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {

      console.log(data)
      var lat = data.coord.lat;
      console.log(lat);
      var lon = data.coord.lon;
      console.log(lon);

      var todayIcon = data.weather[0].icon
      console.log("icon:", todayIcon);

      var todayTemp = data.main.temp;
      todayTemp = Math.round(todayTemp)
      console.log(todayTemp)

      // $(".currentDate").text(currentDate)
      $(".card-header").text(data.name)
      $(".todayIcon").attr("src", "http://openweathermap.org/img/wn/" + todayIcon + "@2x.png")

      $(".today-card-text").append("<li> Temp: " + todayTemp + " Degrees F" + "</li>")
      $(".today-card-text").append("<li> Humidity: " + data.main.humidity + " %" + "</li>")
      $(".today-card-text").append("<li> Wind Speed: " + data.wind.speed + "MPH" + "</li>")


      fetch("http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=c5f163a6903bc47e2936fd40702fea5f")
        .then(function (response) {
          response.json().then(function (UVdata) {
            console.log(UVdata);
            var uvIndex = UVdata.value;
            console.log(uvIndex);

            $(".badge").text(uvIndex)

            if (uvIndex < 3) {
              $(".badge").addClass("badge-success");
            }
            else if (uvIndex > 7) {
              $(".badge").addClass("badge-danger")
            }
            else $(".badge").addClass("badge-warning")
          })

        })
      fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=120&units=imperial&APPID=c5f163a6903bc47e2936fd40702fea5f")
        .then(function (response) {
          response.json().then(function (forecastData) {
            console.log("Forecast Data: ", forecastData);


            var i = 0;

            var date = forecastData.list[i].dt_txt;
            console.log("Forecast Date: ", date, typeof date);

            date = date.substring(0, date.length - 8);
            console.log("Forecast Date: ", date);

            var forecastTemp = forecastData.list[i].main.temp;

            forecastTemp = Math.round(forecastTemp);
            console.log("Forecast Temp: ", forecastTemp, typeof forecastTemp);

            var forecastHumidity = forecastData.list[i].main.humidity;
            console.log("Forecast Humidity:", forecastHumidity);

            var forecastIcon = forecastData.list[i].weather[i].icon;
            console.log("Forecast Icon", forecastIcon);
            $(".forecastIcon").attr("src", "http://openweathermap.org/img/wn/" + forecastIcon + "@2x.png")

            $(".forecastTitle").text(date)

            $(".forecast-card-text").append("<li> Temp: " + forecastTemp + " Degrees F" + "</li>")
            $(".forecast-card-text").append("<li> Humidity: " + forecastData.list[i].main.humidity + " %" + "</li>")


          })
        })

    })


  })
};

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
