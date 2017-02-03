var Weather = require('./../js/weather.js').weatherModule;
$(document).ready(function () {
    var currentWeatherObject = new Weather();
    $('#weatherLocation').click(function () {
        var city = $('#location').val();
        $('#location').val("");
        currentWeatherObject.getWeather(city);
    });
});
//var apiKey = require('./../.env').apiKey;
//var apiKey = "32cd03597d3f87518a6a818541f8e1aa";
//$(document).ready(function () {
//    var currentWeatherObject = new Weather();
//    currentWeatherObject.getWeather();
//    $(document).ready(function () {
//        $('#weatherLocation').click(function () {
//            var city = $('#location').val();
//            $('#location').val("");
//            $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
//                $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//            }).fail(function (error) {
//                $('.showWeather').text(error.responseJSON.message);
//            });
//        });
//    });
//});