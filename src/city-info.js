import { getForecast } from ".";

function createLeftSide() {
    const sideInfoFirst = document.createElement('div');
    sideInfoFirst.classList.add('sideInfo');

    const addInfoFirst = document.createElement('article');
    addInfoFirst.classList.add('addInfo');
    sideInfoFirst.appendChild(addInfoFirst);
    const addInfoSecond = document.createElement('article');
    addInfoSecond.classList.add('addInfo');
    sideInfoFirst.appendChild(addInfoSecond);

    return sideInfoFirst;
}

function createMainInfo(data) {
    const mainInfo = document.createElement('div');
    mainInfo.setAttribute('id', 'mainInfo');

    const topInfo = document.createElement('article');
    topInfo.classList.add('general-info');
    mainInfo.appendChild(topInfo);

    const topTemps = document.createElement('div');
    const condNImg = document.createElement('div');
    condNImg.classList.add('conditionAndImg');
    const topTemp = document.createElement('p');
    topTemp.classList.add('temperatureTop');
    const feelsLikeTemp = document.createElement('p');
    const topCondition = document.createElement('p');
    const condImg = document.createElement('img');
    topInfo.appendChild(topTemps);
    topInfo.appendChild(condNImg);
    topTemps.appendChild(topTemp);
    topTemps.appendChild(feelsLikeTemp);
    condNImg.appendChild(condImg);
    condNImg.appendChild(topCondition);

    topTemp.textContent = data.currentData.temp_c;
    topCondition.textContent = data.currentData.condition;
    condImg.src = data.currentData.conditionImg;
    feelsLikeTemp.textContent = 'Feels like ' + data.currentData.feelslike_c;

    const midInfo = document.createElement('article');
    midInfo.setAttribute('id', 'dailyInfo');
    mainInfo.appendChild(midInfo);

    for (let i = 0; i < 3; i++) {
        const dayInfo = document.createElement('div');
        dayInfo.classList.add('daily-info-block');

        const dayP = document.createElement('p');
        dayInfo.appendChild(dayP);

        const conditionImg_day = document.createElement('img');
        dayInfo.appendChild(conditionImg_day);

        const condition_day = document.createElement('p');
        dayInfo.appendChild(condition_day);

        const temp_day = document.createElement('p');
        dayInfo.appendChild(temp_day);

        midInfo.appendChild(dayInfo);

        dayP.textContent = data.dailyData[i].date;
        conditionImg_day.src = data.dailyData[i].day.condition.icon;
        condition_day.textContent = data.dailyData[i].day.condition.text;
        temp_day.textContent = data.dailyData[i].day.avgtemp_c + '°';
    }

    const lowInfo = document.createElement('article');
    lowInfo.classList.add('hourly-info');
    mainInfo.appendChild(lowInfo);

    for (let i = new Date().getHours() + 1; i < new Date().getHours() + 7; i++) {
        const hourInfo = document.createElement('div');
        hourInfo.classList.add('hourly-info-block');

        const timeP = document.createElement('p');
        hourInfo.appendChild(timeP);

        const conditionImg_hour = document.createElement('img');
        hourInfo.appendChild(conditionImg_hour);

        const temp_hour = document.createElement('p');
        hourInfo.appendChild(temp_hour);

        lowInfo.appendChild(hourInfo);

        timeP.textContent = i + ':00';
        conditionImg_hour.src = data.hourlyData[i].condition.icon;
        temp_hour.textContent = data.hourlyData[i].temp_c + '°';
    }

    return mainInfo;
}

function createRightSide() {
    const sideInfoSecond = document.createElement('div');
    sideInfoSecond.classList.add('sideInfo');

    const addInfoThird = document.createElement('article');
    addInfoThird.classList.add('addInfo');
    sideInfoSecond.appendChild(addInfoThird);
    const addInfoFourth = document.createElement('article');
    addInfoFourth.classList.add('addInfo');
    sideInfoSecond.appendChild(addInfoFourth);

    return sideInfoSecond;
}

function createCity(data) {
    const citiesParent = document.getElementById('exampleCities');

    const sideInfoFirst = createLeftSide();
    citiesParent.appendChild(sideInfoFirst);

    const mainInfo = createMainInfo(data);
    citiesParent.appendChild(mainInfo);

    const sideInfoSecond = createRightSide();
    citiesParent.appendChild(sideInfoSecond);
}

async function showCity(name) {
    const citiesParent = document.getElementById('exampleCities');
    citiesParent.textContent = '';
    const data = await getForecast(name);
    console.log(data);
    console.log(data.forecast.forecastday[0].hour);

    const forecastData = {
        currentData: {
            temp_c: data.current.temp_c + '°',
            feelslike_c: data.current.feelslike_c + '°',
            condition: data.current.condition.text,
            conditionImg: data.current.condition.icon,
        },
        hourlyData: data.forecast.forecastday[0].hour,
        dailyData: data.forecast.forecastday,
    };

    createCity(forecastData);
}

export default showCity;