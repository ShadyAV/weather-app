(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{R:()=>o,b:()=>c});const t=async function(e){const t=document.getElementById("exampleCities"),n=document.createElement("article");n.classList.add("example-city"),t.appendChild(n);const o=document.createElement("p");n.appendChild(o),o.classList.add("upper-example");const a=document.createElement("h2");o.appendChild(a);const d=document.createElement("p");d.classList.add("temperature"),o.appendChild(d);const i=document.createElement("p");n.appendChild(i);const l=document.createElement("div");l.classList.add("lower-part"),n.appendChild(l);const r=document.createElement("img");l.appendChild(r);const s=document.createElement("p");l.appendChild(s),a.textContent=e;const m=await async function(e){const t=await c(e);console.log(t);return{temp_c:t.current.temp_c+"°",feelslike_c:t.current.feelslike_c+"°",condition:t.current.condition.text,conditionImg:t.current.condition.icon}}(e);d.textContent=m.temp_c,i.textContent="Feels like "+m.feelslike_c,s.textContent=m.condition,r.src=m.conditionImg};const n=async function(e){document.getElementById("exampleCities").textContent="";const t=await o(e);console.log(t),console.log(t.forecast.forecastday[0].hour),function(e){const t=document.getElementById("exampleCities"),n=function(e){const t=document.createElement("div");t.setAttribute("id","mainInfo");const n=document.createElement("article");n.classList.add("general-info"),t.appendChild(n);const c=document.createElement("div"),o=document.createElement("div");o.classList.add("conditionAndImg");const a=document.createElement("p");a.classList.add("temperatureTop");const d=document.createElement("p"),i=document.createElement("p"),l=document.createElement("img");n.appendChild(c),n.appendChild(o),c.appendChild(a),c.appendChild(d),o.appendChild(l),o.appendChild(i),a.textContent=e.currentData.temp_c,i.textContent=e.currentData.condition,l.src=e.currentData.conditionImg,d.textContent="Feels like "+e.currentData.feelslike_c;const r=document.createElement("article");r.setAttribute("id","dailyInfo"),t.appendChild(r);for(let t=0;t<3;t++){const n=document.createElement("div");n.classList.add("daily-info-block");const c=document.createElement("p");n.appendChild(c);const o=document.createElement("img");n.appendChild(o);const a=document.createElement("p");n.appendChild(a);const d=document.createElement("p");n.appendChild(d),r.appendChild(n),c.textContent=e.dailyData[t].date,o.src=e.dailyData[t].day.condition.icon,a.textContent=e.dailyData[t].day.condition.text,d.textContent=e.dailyData[t].day.avgtemp_c+"°"}const s=document.createElement("article");s.classList.add("hourly-info"),t.appendChild(s);for(let t=(new Date).getHours()+1;t<(new Date).getHours()+7;t++){const n=document.createElement("div");n.classList.add("hourly-info-block");const c=document.createElement("p");n.appendChild(c);const o=document.createElement("img");n.appendChild(o);const a=document.createElement("p");n.appendChild(a),s.appendChild(n),c.textContent=t+":00",o.src=e.hourlyData[t].condition.icon,a.textContent=e.hourlyData[t].temp_c+"°"}return t}(e);t.appendChild(n)}({currentData:{temp_c:t.current.temp_c+"°",feelslike_c:t.current.feelslike_c+"°",condition:t.current.condition.text,conditionImg:t.current.condition.icon},hourlyData:t.forecast.forecastday[0].hour,dailyData:t.forecast.forecastday})};async function c(e){const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=e69cacde01d745379a564709230104&q=${e}`,{mode:"cors"});return await t.json()}async function o(e){const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e69cacde01d745379a564709230104&q=${e}&days=3&aqi=yes&alerts=no`,{mode:"cors"});return await t.json()}window.addEventListener("load",(()=>{document.getElementById("searchBtn").addEventListener("click",(()=>{const e=document.getElementById("cityInput").value;n(e)})),document.getElementById("appTitle").addEventListener("click",(()=>{document.getElementById("exampleCities").textContent="",t("London"),t("Berlin"),t("Paris"),t("Moscow"),t("Tokyo")})),t("London"),t("Berlin"),t("Paris"),t("Moscow"),t("Tokyo")}))})();