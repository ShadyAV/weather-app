import { getTodayData } from ".";

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
    const exampleData = await processData(name);
    temp.textContent = exampleData.temp_c;
    midPar.textContent = 'Feels like ' + exampleData.feelslike_c;
    condition.textContent = exampleData.condition;
    condImg.src = exampleData.conditionImg;
}

async function processData(name) {
    const data = await getTodayData(name);
    console.log(data);
    const exampleData = {
        temp_c: data.current.temp_c + '°',
        feelslike_c: data.current.feelslike_c + '°',
        condition: data.current.condition.text,
        conditionImg: data.current.condition.icon,
    };
    return exampleData;
}

export default createExample;