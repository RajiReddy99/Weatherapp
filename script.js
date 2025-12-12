async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const info = document.getElementById("weatherInfo");

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const area = data.nearest_area[0].areaName[0].value;
        const temp = data.current_condition[0].temp_C;
        const condition = data.current_condition[0].weatherDesc[0].value;

        document.getElementById("cityName").innerText = area;
        document.getElementById("temp").innerText = `🌡 Temperature: ${temp}°C`;
        document.getElementById("condition").innerText = `☁ Condition: ${condition}`;

        info.style.display = "block";

    } catch (error) {
        alert("Couldn't fetch weather data!");
        console.error(error);
    }
}
