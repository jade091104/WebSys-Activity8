document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getWeather").addEventListener("click", function() {
        const city = document.getElementById("city").value.trim(); // Trim spaces
        if (city === "") {
            alert("Please enter a city name.");
            return;
        }

        const apiKey = "4ebf56021c825fe14e946afa6432df27";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
            })
            .catch(error => {
                document.getElementById("temperature").textContent = "Error: " + error.message;
                document.getElementById("humidity").textContent = "";
                document.getElementById("description").textContent = "";
            });
    });
});
