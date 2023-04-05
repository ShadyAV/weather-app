async function getTodayData(city = 'Novosibirsk') {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e69cacde01d745379a564709230104&q=${city}`, {
        mode: 'cors'
    });
    const data = await response.json();
    return data;
}

async function getForecast(city = 'Novosibirsk') {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e69cacde01d745379a564709230104&q=${city}&days=3&aqi=yes&alerts=no`, {
        mode: 'cors'
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function createExample(name) {
    const citiesParent = document.getElementById('exampleCities');
    const exampleCity = document.createElement('article');
    exampleCity.classList.add('example-city');
    citiesParent.appendChild(exampleCity);
    const upPar = document.createElement('p');
    exampleCity.appendChild(upPar);
    upPar.classList.add('upper-example');
    const cityName = document.createElement('h2');
    upPar.appendChild(cityName);
    const temp = document.createElement('p');
    temp.classList.add('temperature');
    upPar.appendChild(temp);
    const midPar = document.createElement('p');
    exampleCity.appendChild(midPar);
    const lowPar = document.createElement('div');
    lowPar.classList.add('lower-part');
    exampleCity.appendChild(lowPar);
    const condImg = document.createElement('img');
    lowPar.appendChild(condImg);
    const condition = document.createElement('p');
    lowPar.appendChild(condition);
    cityName.textContent = name;
    let exampleData = await fillExample(name);
    temp.textContent = exampleData.temp_c;
    midPar.textContent = 'Feels like ' + exampleData.feelslike_c;
    condition.textContent = exampleData.condition;
    condImg.src = exampleData.conditionImg;
}

async function fillExample(name) {
    const data = await getTodayData(name);
    const exampleData = {
        temp_c: data.current.temp_c + '°',
        feelslike_c: data.current.feelslike_c + '°',
        condition: data.current.condition.text,
        conditionImg: data.current.condition.icon,
    };
    return exampleData;
}

function createCity(data) {
    const citiesParent = document.getElementById('exampleCities');

    const sideInfoFirst = document.createElement('div');
    sideInfoFirst.classList.add('sideInfo');
    citiesParent.appendChild(sideInfoFirst);

    const addInfoFirst = document.createElement('article');
    addInfoFirst.classList.add('addInfo');
    sideInfoFirst.appendChild(addInfoFirst);
    const addInfoSecond = document.createElement('article');
    addInfoSecond.classList.add('addInfo');
    sideInfoFirst.appendChild(addInfoSecond);

    const mainInfo = document.createElement('div');
    mainInfo.setAttribute('id', 'mainInfo');
    citiesParent.appendChild(mainInfo);

    const topInfo = document.createElement('article');
    topInfo.classList.add('hourly-info');
    mainInfo.appendChild(topInfo);

    const topTemp = document.createElement('p');
    const topCondition = document.createElement('p');
    topInfo.appendChild(topTemp);
    topInfo.appendChild(topCondition);

    const midInfo = document.createElement('article');
    midInfo.setAttribute('id', 'dailyInfo');
    mainInfo.appendChild(midInfo);

    const lowInfo = document.createElement('article');
    lowInfo.classList.add('hourly-info');
    mainInfo.appendChild(lowInfo);

    const sideInfoSecond = document.createElement('div');
    sideInfoSecond.classList.add('sideInfo');
    citiesParent.appendChild(sideInfoSecond);

    const addInfoThird = document.createElement('article');
    addInfoThird.classList.add('addInfo');
    sideInfoSecond.appendChild(addInfoThird);
    const addInfoFourth = document.createElement('article');
    addInfoFourth.classList.add('addInfo');
    sideInfoSecond.appendChild(addInfoFourth);

    topTemp.textContent = data.temp_c;
    topCondition.textContent = data.condition;

}

async function showCity(name) {
    const citiesParent = document.getElementById('exampleCities');
    citiesParent.textContent = '';
    const data = await getForecast(name);

    const exampleData = {
        temp_c: data.current.temp_c + '°',
        feelslike_c: data.current.feelslike_c + '°',
        condition: data.current.condition.text,
        conditionImg: data.current.condition.icon,
    };

    createCity(exampleData);
}

window.addEventListener('load', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => {
        const cityInput = document.getElementById('cityInput');
        const inputText = cityInput.value;
        console.log(inputText);
        showCity(inputText);
    });
    createExample('London');
    createExample('Berlin');
    createExample('Paris');
    createExample('Moscow');
    createExample('Tokyo');
})