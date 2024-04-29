// Define a class to represent a weather report
var WeatherReport = /** @class */ (function () {
    function WeatherReport(city, temperature, description, humidity, windSpeed, sunrise, sunset, pressure) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.pressure = pressure;
    }
    WeatherReport.prototype.displayReport = function () {
        console.log("Weather in ".concat(this.city, ":"));
        console.log("Temperature: ".concat(this.temperature, "\u00B0C"));
        console.log("Description: ".concat(this.description));
        console.log("Humidity: ".concat(this.humidity, "%"));
        console.log("Wind Speed: ".concat(this.windSpeed, " km/h"));
        console.log("Sunrise: ".concat(this.sunrise));
        console.log("Sunset: ".concat(this.sunset));
        console.log("Pressure: ".concat(this.pressure, " hPa"));
    };
    return WeatherReport;
}());
// Example weather reports
var report1 = new WeatherReport("New York", 18, "Partly Cloudy", 60, 15, "06:30 AM", "06:00 PM", 1013);
var report2 = new WeatherReport("London", 12, "Rainy", 80, 20, "07:00 AM", "07:30 PM", 1018);
// Display the weather reports
report1.displayReport();
report2.displayReport();
