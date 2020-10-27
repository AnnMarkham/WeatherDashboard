var getCityWeather = function (city) {
  //format the weather api url
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&APPID=c5f163a6903bc47e2936fd40702fea5f"

  //make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);

    });
  });
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





// schedule = JSON.parse(localStorage.getItem("schedule"));
// if (!schedule) {
//   schedule = [];
// };






// //save button function
// $(".saveBtn").on("click", function () {
//   schedule = []
//   for (i = 0; i < 9; i++) {
//     schedule.push($("#text" + i).val());
//   }

//   localStorage.setItem("schedule", JSON.stringify(schedule));
// });

// // save function
// var saveAppts = function () {
//   schedule = []
//   for (i = 0; i < 9; i++) {
//     schedule.push($("#text" + i).val());
//   }
//   localStorage.setItem("schedule", JSON.stringify(schedule));
// }