import createExample from "./example-city";
import showCity from "./city-info";

async function getTodayData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e69cacde01d745379a564709230104&q=${city}`, {
        mode: 'cors'
    });
    const data = await response.json();
    return data;
}

async function getForecast(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e69cacde01d745379a564709230104&q=${city}&days=3&aqi=yes&alerts=no`, {
        mode: 'cors'
    });
    const data = await response.json();
    return data;
}

window.addEventListener('load', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => {
        const cityInput = document.getElementById('cityInput');
        const inputText = cityInput.value;
        showCity(inputText);
    });
    createExample('London');
    createExample('Berlin');
    createExample('Paris');
    createExample('Moscow');
    createExample('Tokyo');
})

export { getTodayData, getForecast };