async function getData(city = 'Novosibirsk') {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e69cacde01d745379a564709230104&q=${city}`, {
        mode: 'cors'
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function createCity(name) {
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
    let cityData = await fillCity(name);
    temp.textContent = cityData.temp_c;
    midPar.textContent = 'Feels like ' + cityData.feelslike_c;
    condition.textContent = cityData.condition;
    condImg.src = cityData.conditionImg;
}

async function fillCity(name) {
    const data = await getData(name);
    const cityData = {
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        condition: data.current.condition.text,
        conditionImg: data.current.condition.icon,
    };
    return cityData;
}

window.addEventListener('load', () => {
    createCity('London');
    createCity('Berlin');
    createCity('Paris');
    createCity('Moscow');
    createCity('Tokyo');
})