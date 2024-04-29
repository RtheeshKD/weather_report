// Define a class to represent a weather report
class WeatherReport {
    city: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
    sunrise: string;
    sunset: string;
    pressure: number;

    constructor(city: string, temperature: number, description: string, humidity: number, windSpeed: number, sunrise: string, sunset: string, pressure: number) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.pressure = pressure;
    }

    displayReport() {
        console.log(`Weather in ${this.city}:`);
        console.log(`Temperature: ${this.temperature}°C`);
        console.log(`Description: ${this.description}`);
        console.log(`Humidity: ${this.humidity}%`);
        console.log(`Wind Speed: ${this.windSpeed} km/h`);
        console.log(`Sunrise: ${this.sunrise}`);
        console.log(`Sunset: ${this.sunset}`);
        console.log(`Pressure: ${this.pressure} hPa`);
    }
}

// Example weather reports
const report1 = new WeatherReport("New York", 18, "Partly Cloudy", 60, 15, "06:30 AM", "06:00 PM", 1013);
const report2 = new WeatherReport("London", 12, "Rainy", 80, 20, "07:00 AM", "07:30 PM", 1018);

// Display the weather reports
report1.displayReport();
report2.displayReport();
