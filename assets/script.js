//Variables for API to call upon again
var APIKey = "72ff93aa90681f2746834fc0e03920bb"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//Elements pulled from the HTML to use
let UserInput = document.querySelector("UserInput");
let searchButton = document.querySelector("Search")

