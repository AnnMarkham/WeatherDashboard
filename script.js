

var searchFormEl = document.querySelector("#searchForm");
var searchInputEl = document.querySelector("#search");

var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
  //add details about what this function will do in addition to preventing default
  //ie add cityname to history
  //search for cityname in weather api
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