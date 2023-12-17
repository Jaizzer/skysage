(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var i=t(81),a=t.n(i),r=t(645),o=t.n(r)()(a());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap);"]),o.push([n.id,"* {\n    box-sizing: border-box;\n}\n\n:root {\n    --border-radius: 15px;\n}\n\nbody {\n    position: relative;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    width: 100%;\n    height: 100%;\n    padding: 30px;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n    grid-template-rows: repeat(4, auto);\n    grid-auto-rows: 230px;\n    gap: 15px;\n    background-color: rgb(230, 230, 230);\n}\n\n.logo-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 10px;\n    align-items: center;\n}\n\n.logo-container img {\n    height: 40px;\n}\n\n.logo-container .logo-text {\n    font-size: 30px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\nform,\n.current-hour-info-container,\n.hourly-forecast-container,\n.highlight-card,\n.n-day-forecast-container {\n    background-color: white;\n    border-color: white;\n}\n\nform img {\n    height: 25px;\n}\n\nform {\n    grid-column: 1 / 3;\n    border-radius: var(--border-radius);\n    overflow: hidden;\n}\n\nform input,\nform button {\n    border: 0px;\n    background-color: transparent;\n}\n\nform input:focus {\n    outline: none;\n}\n\n#search-bar {\n    border: 1px solid white;\n    display: grid;\n    align-content: center;\n    grid-template-columns: auto 1fr;\n    padding: 7px 10px 7px 10px;\n}\n\n#unit-converter {\n    grid-column: -2 / -1;\n    display: grid;\n    grid-template-columns: repeat(2, 41px);\n    justify-content: end;\n    gap: 10px;\n}\n\n.fahrenheit,\n.celsius {\n    background-color: white;\n    color: black;\n\n    border-radius: 100%;\n    border: 0px;\n    font-weight: 600;\n\n    padding: 5px;\n}\n\n.selected-unit {\n    background-color: black;\n    color: white;\n}\n\n.current-hour-info-container {\n    grid-column: 1 / -1;\n}\n\n.n-day-forecast-container {\n    grid-column: 1 / 3;\n}\n\n.hourly-forecast-container {\n    grid-column: 1 / -1;\n}\n\n.todays-highlights-container {\n    grid-column: 2 / -1;\n}\n\n@media screen and (max-width: 599px) {\n    body {\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-rows: repeat(6, auto);\n        grid-auto-rows: 180px;\n    }\n\n    #unit-converter {\n        grid-column: 1 / -1;\n        justify-content: space-between;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 10px;\n    }\n\n    .celsius,\n    .fahrenheit {\n        border-radius: var(--border-radius);\n    }\n\n    .logo-container {\n        grid-column: 1 / -1;\n    }\n}\n\n@media screen and (max-width: 329px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(6, auto);\n    }\n\n    form,\n    .current-hour-info-container,\n    .n-day-forecast-container,\n    .hourly-forecast-container {\n        grid-column: 1 / -1;\n    }\n}\n\n.current-hour-info-container,\n.hourly-forecast-container,\n.n-day-forecast-container,\n.highlight-card {\n    border: 1px solid rgb(236, 236, 236);\n}\n\n.current-hour-info-container {\n    border-radius: var(--border-radius);\n    padding: 30px;\n\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    grid-template-rows: repeat(5, auto);\n    justify-content: center;\n    align-content: center;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.current-hour-info-container .location,\n.current-hour-info-container .weather-icon,\n.current-hour-info-container .main-temperature,\n.current-hour-info-container .weather-description {\n    grid-column: 1 / 3;\n}\n\n.current-hour-info-container .high {\n    grid-template-columns: 1 / 2;\n}\n\n.current-hour-info-container .low {\n    grid-template-columns: 2 / 3;\n}\n\n.location {\n    font-size: 25px;\n}\n\n.main-temperature {\n    font-size: 40px;\n}\n\n.hourly-forecast-container {\n    height: 170px;\n    border-radius: var(--border-radius);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n    padding-left: 15px;\n\n    display: grid;\n    grid-auto-flow: column;\n\n    width: 100%;\n    overflow: auto;\n\n    gap: 20px;\n}\n\n.hour-container {\n    display: grid;\n    grid-auto-flow: row;\n    justify-content: center;\n    align-content: center;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-container .weather-icon {\n    justify-self: center;\n    scale: 0.75;\n}\n\n.n-day-forecast-container {\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n\n    border-radius: var(--border-radius);\n    padding: 20px;\n}\n\n.daily-forecast-container:nth-child(1) {\n    grid-row: 1 / 2;\n}\n\n.daily-forecast-container:nth-child(2) {\n    grid-row: 2 / 3;\n}\n\n.daily-forecast-container:nth-child(3) {\n    grid-row: 3 / 4;\n}\n\n.daily-forecast-container {\n    display: grid;\n    grid-template-columns: 3fr 3fr 2fr 2fr;\n    align-content: center;\n    align-items: center;\n\n    gap: 10px;\n}\n\n.daily-forecast-container .weather-icon {\n    justify-self: center;\n}\n\n.high-low-temperature-container {\n    display: grid;\n    grid-template-columns: subgrid;\n}\n\n.daily-forecast-container .low,\n.daily-forecast-container .high {\n    justify-self: end;\n}\n\n.daily-forecast-container .low {\n    grid-column: 3 / 4;\n}\n\n.daily-forecast-container .high {\n    grid-column: 4 / 5;\n}\n\n.daily-forecast-container img {\n    scale: 0.75;\n}\n\n.todays-highlights-container {\n    display: contents;\n}\n\n.icon-container {\n    height: 20px;\n    width: 20px;\n}\n\n.heading-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    align-content: center;\n    gap: 5px;\n    align-self: start;\n}\n\n.heading-container .highlight-icon {\n    width: 100%;\n    height: 100%;\n}\n\n.highlight-card {\n    border-radius: var(--border-radius);\n    padding: 20px;\n    display: grid;\n    grid-template-rows: auto repeat(2, 1fr);\n    gap: 10px;\n}\n\n.highlight-name {\n    text-transform: uppercase;\n    font-size: 12px;\n}\n\n.highlight-card .value {\n    font-size: 20px;\n    align-self: center;\n}\n\n.additional-notes {\n    font-size: 12px;\n}\n\n.sunrise-sunset {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto repeat(2, 1fr);\n    align-items: center;\n    gap: 0px;\n}\n\n.sunrise-sunset .heading-container {\n    grid-column: 1 / 3;\n}\n\n.sunrise-sunset .icon {\n    width: 30px;\n    grid-column: 1 / 2;\n}\n\n.sunrise-time,\n.sunset-time {\n    grid-column: 2 / 3;\n    justify-self: center;\n}\n\n.blurry-background {\n    width: 100%;\n    height: 100%;\n\n    position: absolute;\n\n    background-color: rgba(164, 164, 164, 0.549);\n    backdrop-filter: blur(5px);\n    z-index: 1;\n}\n\n.error-card {\n    position: sticky;\n    padding: 20px;\n    border-radius: var(--border-radius);\n\n    top: 20%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n\n    display: grid;\n    grid-template-rows: 15px 1fr 15px;\n    grid-template-columns: 50px 1fr;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n    background-color: rgb(255, 255, 255);\n}\n\n.close-button {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    justify-self: end;\n}\n\n.error-image {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n}\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},o=[],c=0;c<n.length;c++){var d=n[c],s=i.base?d[0]+i.base:d[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=a(m,i);i.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=i(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var c=t(r[o]);e[c].references--}for(var d=i(n,a),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&!n;)n=i[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),a=t.n(i),r=t(569),o=t.n(r),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class g{constructor(n,e,t,i,a,r,o,c,d,s,l,u,p,m,h,g,f,v,b,y,C,x){this.location=n,this.date=e,this.unit=t,this.highTemperature=i,this.lowTemperature=a,this.generalWeatherStatus=r,this.generalWeatherIcon=o,this.currentTemperature=c,this.currentHourWeatherStatus=d,this.currentHourWeatherIcon=s,this.uvIndex=l,this.sunset=u,this.sunrise=p,this.moonPhase=m,this.moonRise=h,this.wind=g,this.precipitation=f,this.feelsLike=v,this.humidity=b,this.visibility=y,this.pressure=C,this.averages=x}}function f(n){const e=n[0][0].date.forecastDate.split(" ")[1].split(":")[0];return n[0][e]}const v=t.p+"img/uv84ca40647609979fe37e.svg",b=t.p+"img/windf9455757d02247ce787d.svg",y=t.p+"img/sunset45f615ea119e5a1af90b.png",C=t.p+"img/sunrise2f522b1af5c815730b2b.png",x=t.p+"img/sun990a8d58b3d77d0ad7eb.png",L=t.p+"img/precipitationadf760e6bc039c45f948.png",w=t.p+"img/humidity7b91f5dc63cbc0d60df2.png",E=t.p+"img/visibility32d38dc4fc06883bfbcb.png",k=t.p+"img/pressureaddd5f60ff712c1a43a5.png",S=t.p+"img/feelsLike6d6c87236e32675bb436.png",M=t.p+"img/moon0666183071c2ad9c9c53.png";function $(){return(new Date).getHours()}const T=t.p+"img/no-locationd2c2698174bb0ca090a2.png";let H="c";async function j(n,e){console.clear();const t=await async function(n){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0f21e3cdb5ce4371bf4215345230411&q=${n}&days=10`,{mode:"cors"});if(200!==e.status)throw new Error(`Failed to fetch data. Status: ${e.status}`);const t=await e.json(),i={forecastLocation:t.location,nDayForecast:t.forecast.forecastday};return console.log(i),i}catch(n){return console.log(n),null}}(n);if(t){D=n;const i=function(n,e){const{forecastLocation:t,nDayForecast:i}=n;return i.map((n=>n.hour.map((i=>new g(t.name,{forecastDate:t.localtime,currentDate:n.date,time:i.time.split(" ")[1]},e,n.day[`maxtemp_${e}`],n.day[`mintemp_${e}`],n.day.condition.text,n.day.condition.icon,i[`temp_${e}`],i.condition.text,i.condition.icon,i.uv,n.astro.sunset,n.astro.sunrise,n.astro.moon_phase,n.astro.moonrise,{windSpeed:i.wind_kph,windDirection:i.wind_dir,windAngle:i.wind_degree},i.precip_mm,i[`feelslike_${e}`],i.humidity,i.vis_km,i.pressure_mb,n.day[`avgtemp_${e}`])))))}(t,e);(function(n){const e=document.querySelector(".n-day-forecast-container");e.innerHTML="",n.forEach((n=>{const t=document.createElement("div");t.classList.add("daily-forecast-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("day-name"),i.innerHTML=function(n){let e="";const t=new Date(n.forecastDate),i=new Date(n.currentDate);return e=t.getFullYear()===i.getFullYear()&&t.getMonth()===i.getMonth()&&t.getDate()===i.getDate()?"Today":i.toLocaleString("en-us",{weekday:"long"}),e}(n[0].date),t.appendChild(i);const a=document.createElement("img");a.classList.add("weather-icon"),a.src=n[0].generalWeatherIcon,t.appendChild(a);const r=document.createElement("div");r.classList.add("low"),r.textContent=`${n[0].lowTemperature}°`,t.appendChild(r);const o=document.createElement("div");o.classList.add("high"),o.textContent=`${n[0].highTemperature}°`,t.appendChild(o)}))})(i),function(n){const e=f(n),t=document.querySelector(".current-hour-info-container");t.innerHTML="";const i=document.createElement("div");i.classList.add("location"),i.textContent=e.location,t.appendChild(i);const a=document.createElement("img");a.classList.add("weather-icon"),a.src=e.currentHourWeatherIcon,t.appendChild(a);const r=document.createElement("div");r.classList.add("main-temperature"),r.textContent=`${e.currentTemperature}°`,t.appendChild(r);const o=document.createElement("div");o.classList.add("weather-description"),o.textContent=e.currentHourWeatherStatus,t.appendChild(o);const c=document.createElement("div");c.classList.add("high"),c.textContent=`H: ${e.highTemperature}°`,t.appendChild(c);const d=document.createElement("div");d.classList.add("low"),d.textContent=`L: ${e.lowTemperature}°`,t.appendChild(d)}(i),function(n){const e=document.querySelector(".todays-highlights-container");e.innerHTML="",e.appendChild(function(n){const e=document.createElement("div");e.classList.add("highlight-card");const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("icon-container"),t.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=v,i.appendChild(a);const r=document.createElement("div");r.classList.add("highlight-name"),r.textContent="UV Index",t.appendChild(r);const o=document.createElement("div");o.classList.add("value"),o.textContent=n,e.appendChild(o);const c=document.createElement("div");return c.classList.add("additional-notes"),c.textContent=function(n){let e="";return n>=0&&n<=2?e="Minimal danger. Up to 1 hour sun, no burning.":n>=3&&n<=5?e="Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection.":n>=6&&n<=7?e="Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas.":n>=8&&n<=10?e="High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection.":n>=11&&(e="Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection."),e}(n),e.appendChild(c),e}(n.uvIndex)),e.appendChild(function(n){const e=document.createElement("div");e.classList.add("highlight-card");const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("icon-container"),t.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=b,i.appendChild(a);const r=document.createElement("div");r.classList.add("highlight-name"),r.textContent="Wind",t.appendChild(r);const o=document.createElement("div");o.classList.add("value"),o.textContent=`${n.windSpeed} km/h`,e.appendChild(o);const c=document.createElement("div");return c.classList.add("additional-notes"),c.textContent=function(n){let e="";return e=n<1?"Calm conditions.":n<4?"Light air.":n<7?"Gentle breeze.":n<11?"Moderate wind.":n<17?"Fresh breeze.":n<22?"Strong wind.":n<28?"High wind, moderate gale, near gale.":n<34?"Gale.":n<41?"Strong gale.":n<48?"Storm.":n<56?"Violent storm.":"Hurricane force.",e}(n.windSpeed),e.appendChild(c),e}(n.wind)),e.appendChild(function(n,e){const t=document.createElement("div");t.classList.add("highlight-card","sunrise-sunset");const i=document.createElement("div");i.classList.add("heading-container"),t.appendChild(i);const a=document.createElement("div");a.classList.add("icon-container"),i.appendChild(a);const r=document.createElement("img");r.classList.add("highlight-icon"),r.src=x,a.appendChild(r);const o=document.createElement("div");o.classList.add("highlight-name"),o.textContent="Sun",i.appendChild(o);const c=document.createElement("img");c.src=C,c.classList.add("icon"),t.appendChild(c);const d=document.createElement("div");d.classList.add("sunrise-time"),d.textContent=n,t.appendChild(d);const s=document.createElement("img");s.src=y,s.classList.add("icon"),t.appendChild(s);const l=document.createElement("div");return l.classList.add("sunset-time"),l.textContent=e,t.appendChild(l),t}(n.sunrise,n.sunset)),e.appendChild(function(n){const e=document.createElement("div");e.classList.add("highlight-card");const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("icon-container"),t.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=L,i.appendChild(a);const r=document.createElement("div");r.classList.add("highlight-name"),r.textContent="Precipitation",t.appendChild(r);const o=document.createElement("div");o.classList.add("value"),o.textContent=`${n} mm`,e.appendChild(o);const c=document.createElement("div");return c.classList.add("additional-notes"),c.textContent=function(n){let e;switch(!0){case 0===n:e="No rainfall";break;case n>0&&n<=5:e="Light rain, carry an umbrella.";break;case n>5&&n<=15:e="Moderate rain, expect wet conditions.";break;case n>15&&n<=30:e="Heavy rain, caution in travel.";break;case n>30&&n<=50:e="Very heavy rain, potential flooding.";break;case n>50&&n<=75:e="Intense rain, high flood risk.";break;default:e="Extreme rain, major flooding possible."}return e}(n),e.appendChild(c),e}(n.precipitation)),e.appendChild(function(n){const e=document.createElement("div");e.classList.add("highlight-card");const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("icon-container"),t.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=w,i.appendChild(a);const r=document.createElement("div");r.classList.add("highlight-name"),r.textContent="Humidity",t.appendChild(r);const o=document.createElement("div");o.classList.add("value"),o.textContent=`${n}%`,e.appendChild(o);const c=document.createElement("div");return c.classList.add("additional-notes"),c.textContent=function(n){let e="";return e=n>=0||n<=30?"Dry, Arid":n>30||n<=60?"Comfortable":"Humid, Muggy",e}(n),e.appendChild(c),e}(n.humidity)),e.appendChild(function(n){const e=document.createElement("div");e.classList.add("highlight-card");const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("icon-container"),t.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=E,i.appendChild(a);const r=document.createElement("div");r.classList.add("highlight-name"),r.textContent="Visibility",t.appendChild(r);const o=document.createElement("div");o.classList.add("value"),o.textContent=`${n} km`,e.appendChild(o);const c=document.createElement("div");return c.classList.add("additional-notes"),c.textContent=function(n){let e="";switch(!0){case n>=16:e="Excellent visibility.";break;case n>=10&&n<16:e="Good visibility.";break;case n>=5&&n<10:e="Moderate visibility.";break;case n>=1.6&&n<5:e="Poor visibility.";break;case n<1.6:e="Very poor visibility.";break;default:e="Visibility information not available."}return e}(n),e.appendChild(c),e}(n.visibility)),e.appendChild(function(n){const e=document.createElement("div");e.classList.add("highlight-card");const t=document.createElement("div");t.classList.add("heading-container"),e.appendChild(t);const i=document.createElement("div");i.classList.add("icon-container"),t.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=k,i.appendChild(a);const r=document.createElement("div");r.classList.add("highlight-name"),r.textContent="Pressure",t.appendChild(r);const o=document.createElement("div");o.classList.add("value"),o.textContent=`${n} hPa`,e.appendChild(o);const c=document.createElement("div");return c.classList.add("additional-notes"),c.textContent=function(n){let e;switch(!0){case 0===n:e="No pressure data available.";break;case n<1e3:e="Low pressure detected.";break;case n>1e3&&n<=1013:e="Normal pressure conditions.";break;case n>1013&&n<=1020:e="Slightly elevated pressure.";break;case n>1020&&n<=1030:e="Moderately high pressure.";break;case n>1030&&n<=1040:e="High pressure, stable conditions.";break;case n>1040:e="Extremely high pressure, unusual conditions."}return e}(n),e.appendChild(c),e}(n.pressure)),e.appendChild(function(n,e){const t=document.createElement("div");t.classList.add("highlight-card");const i=document.createElement("div");i.classList.add("heading-container"),t.appendChild(i);const a=document.createElement("div");a.classList.add("icon-container"),i.appendChild(a);const r=document.createElement("img");r.classList.add("highlight-icon"),r.src=S,a.appendChild(r);const o=document.createElement("div");o.classList.add("highlight-name"),o.textContent="Feels Like",i.appendChild(o);const c=document.createElement("div");c.classList.add("value"),c.textContent=`${n}°`,t.appendChild(c);const d=document.createElement("div");return d.classList.add("additional-notes"),d.textContent=function(n,e){let t="";switch(!0){case"f"===e&&n>=86||"c"===e&&n>=30:t="Hot Weather";break;case"f"===e&&n>=68&&n<86||"c"===e&&n>=20&&n<30:t="Warm Weather";break;case"f"===e&&n>=50&&n<68||"c"===e&&n>=10&&n<20:t="Mild Weather";break;case"f"===e&&n>=32&&n<50||"c"===e&&n>=0&&n<10:t="Cool Weather";break;case"f"===e&&n>=14&&n<32||"c"===e&&n>=-10&&n<0:t="Cold Weather";break;case"f"===e&&n<14||"c"===e&&n<-10:t="Freezing Weather";break;default:t="Variable Conditions"}return t}(n,e),t.appendChild(d),t}(n.feelsLike,n.unit)),e.appendChild(function(n,e){const t=document.createElement("div");t.classList.add("highlight-card");const i=document.createElement("div");i.classList.add("heading-container"),t.appendChild(i);const a=document.createElement("div");a.classList.add("icon-container"),i.appendChild(a);const r=document.createElement("img");r.classList.add("highlight-icon"),r.src=M,a.appendChild(r);const o=document.createElement("div");o.classList.add("highlight-name"),o.textContent="Moon",i.appendChild(o);const c=document.createElement("div");return c.classList.add("value"),c.textContent=`${n}, ${e}`,t.appendChild(c),t}(n.moonPhase,n.moonRise))}(f(i)),function(n){const e=document.querySelector(".hourly-forecast-container");e.innerHTML="";const t=function(n){const e=$();let t=[];return t=t.concat(n[0].slice(e)),t=t.concat(n[1].slice(0,e+1)),t}(n);t.forEach((n=>{const t=document.createElement("div");t.classList.add("hour-container");const i=parseInt(n.date.time.slice(0,2),10),a=document.createElement("div");a.classList.add("time");const r=function(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}();var o;i===$()&&n.date.currentDate===r?a.textContent="Now":a.textContent=`${(o=i)%12||12} ${o<12?"AM":"PM"}`,t.appendChild(a);const c=document.createElement("img");c.classList.add("weather-icon"),c.src=n.currentHourWeatherIcon,t.appendChild(c);const d=document.createElement("div");d.classList.add("temperature"),d.textContent=`${n.currentTemperature}°`,t.appendChild(d),e.appendChild(t)}))}(i)}else!function(n){document.querySelector("input").disabled=!0;const e=function(n){const e=document.createElement("div");e.classList.add("blurry-background"),document.body.appendChild(e);const t=document.createElement("div");t.classList.add("error-card"),e.appendChild(t);const i=document.createElement("div");i.classList.add("close-button"),i.textContent="X",i.addEventListener("click",(()=>{e.remove();const n=document.querySelector("input");n.disabled=!1,n.value=""})),t.appendChild(i);const a=document.createElement("img");a.classList.add("error-image"),a.src=T,t.appendChild(a);const r=document.createElement("div");return r.classList.add("error-message"),r.textContent=n,t.appendChild(r),e}(n);document.body.appendChild(e)}("Location not found.")}let D="London";j(D,H);const F=document.querySelector("form");F.addEventListener("submit",(n=>{n.preventDefault(),j(F.querySelector("#search-location").value,H)}));const I=document.querySelector(".fahrenheit"),W=document.querySelector(".celsius");I.addEventListener("click",(()=>{H="f",I.classList.contains("selected-unit")||(I.classList.add("selected-unit"),j(D,H)),W.classList.remove("selected-unit")})),W.addEventListener("click",(()=>{H="c",W.classList.contains("selected-unit")||(W.classList.add("selected-unit"),j(D,H)),I.classList.remove("selected-unit")}))})()})();