(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap);"]),o.push([n.id,"* {\n    box-sizing: border-box;\n}\n\n:root {\n    --border-radius: 15px;\n}\n\nbody {\n    position: relative;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    width: 100%;\n    height: 100%;\n    padding: 30px;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n    grid-template-rows: repeat(4, auto);\n    grid-auto-rows: 230px;\n    gap: 15px;\n    background-color: rgb(230, 230, 230);\n}\n\n.logo-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 10px;\n    align-items: center;\n}\n\n.logo-container img {\n    height: 40px;\n}\n\n.logo-container .logo-text {\n    font-size: 30px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\nform,\n.current-hour-info-container,\n.hourly-forecast-container,\n.highlight-card,\n.n-day-forecast-container {\n    background-color: white;\n    border-color: white;\n}\n\nform img {\n    height: 25px;\n}\n\nform {\n    grid-column: 1 / 3;\n    border-radius: var(--border-radius);\n    overflow: hidden;\n}\n\nform input,\nform button {\n    border: 0px;\n    background-color: transparent;\n}\n\nform input:focus {\n    outline: none;\n}\n\n#search-bar {\n    border: 1px solid white;\n    display: grid;\n    align-content: center;\n    grid-template-columns: auto 1fr;\n    padding: 7px 10px 7px 10px;\n}\n\n#unit-converter {\n    grid-column: -2 / -1;\n    display: grid;\n    grid-template-columns: repeat(2, 41px);\n    justify-content: end;\n    gap: 10px;\n}\n\n.fahrenheit,\n.celsius {\n    background-color: white;\n    color: black;\n\n    border-radius: 100%;\n    border: 0px;\n    font-weight: 600;\n\n    padding: 5px;\n}\n\n.selected-unit {\n    background-color: black;\n    color: white;\n}\n\n.current-hour-info-container {\n    grid-column: 1 / -1;\n}\n\n.n-day-forecast-container {\n    grid-column: 1 / 3;\n}\n\n.hourly-forecast-container {\n    grid-column: 1 / -1;\n}\n\n.todays-highlights-container {\n    grid-column: 2 / -1;\n}\n\n@media screen and (max-width: 599px) {\n    body {\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-rows: repeat(6, auto);\n        grid-auto-rows: 180px;\n    }\n\n    #unit-converter {\n        grid-column: 1 / -1;\n        justify-content: space-between;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 10px;\n    }\n\n    .celsius,\n    .fahrenheit {\n        border-radius: var(--border-radius);\n    }\n\n    .logo-container {\n        grid-column: 1 / -1;\n    }\n}\n\n@media screen and (max-width: 329px) {\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(6, auto);\n    }\n\n    form,\n    .current-hour-info-container,\n    .n-day-forecast-container,\n    .hourly-forecast-container {\n        grid-column: 1 / -1;\n    }\n}\n\n.current-hour-info-container,\n.hourly-forecast-container,\n.n-day-forecast-container,\n.highlight-card {\n    border: 1px solid rgb(236, 236, 236);\n}\n\n.current-hour-info-container {\n    border-radius: var(--border-radius);\n    padding: 30px;\n\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    grid-template-rows: repeat(5, auto);\n    justify-content: center;\n    align-content: center;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.current-hour-info-container .location,\n.current-hour-info-container .weather-icon,\n.current-hour-info-container .main-temperature,\n.current-hour-info-container .weather-description {\n    grid-column: 1 / 3;\n}\n\n.current-hour-info-container .high {\n    grid-template-columns: 1 / 2;\n}\n\n.current-hour-info-container .low {\n    grid-template-columns: 2 / 3;\n}\n\n.location {\n    font-size: 25px;\n}\n\n.main-temperature {\n    font-size: 40px;\n}\n\n.hourly-forecast-container {\n    height: 170px;\n    border-radius: var(--border-radius);\n    padding-top: 30px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n    padding-left: 15px;\n\n    display: grid;\n    grid-auto-flow: column;\n\n    width: 100%;\n    overflow: auto;\n\n    gap: 20px;\n}\n\n.hour-container {\n    width: 70px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-auto-flow: row;\n    justify-content: center;\n    align-content: center;\n    justify-items: center;\n    align-items: center;\n}\n\n.hour-container img {\n    justify-self: center;\n    width: 48px;\n}\n\n.n-day-forecast-container {\n    display: grid;\n    grid-template-rows: repeat(3, auto);\n\n    border-radius: var(--border-radius);\n    padding: 20px;\n}\n\n.daily-forecast-container:nth-child(1) {\n    grid-row: 1 / 2;\n}\n\n.daily-forecast-container:nth-child(2) {\n    grid-row: 2 / 3;\n}\n\n.daily-forecast-container:nth-child(3) {\n    grid-row: 3 / 4;\n}\n\n.daily-forecast-container {\n    display: grid;\n    grid-template-columns: 3fr 3fr 2fr 2fr;\n    align-content: center;\n    align-items: center;\n\n    gap: 10px;\n}\n\n.daily-forecast-container .weather-icon {\n    justify-self: center;\n}\n\n.high-low-temperature-container {\n    display: grid;\n    grid-template-columns: subgrid;\n}\n\n.daily-forecast-container .low,\n.daily-forecast-container .high {\n    justify-self: end;\n}\n\n.daily-forecast-container .low {\n    grid-column: 3 / 4;\n}\n\n.daily-forecast-container .high {\n    grid-column: 4 / 5;\n}\n\n.daily-forecast-container img {\n    scale: 0.75;\n}\n\n.todays-highlights-container {\n    display: contents;\n}\n\n.icon-container {\n    height: 20px;\n    width: 20px;\n}\n\n.heading-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    align-content: center;\n    gap: 5px;\n    align-self: start;\n}\n\n.heading-container .highlight-icon {\n    width: 100%;\n    height: 100%;\n}\n\n.highlight-card {\n    border-radius: var(--border-radius);\n    padding: 20px;\n    display: grid;\n    grid-template-rows: auto repeat(2, 1fr);\n    gap: 10px;\n}\n\n.highlight-name {\n    text-transform: uppercase;\n    font-size: 12px;\n}\n\n.highlight-card .value {\n    font-size: 20px;\n    align-self: center;\n}\n\n.additional-notes {\n    font-size: 12px;\n}\n\n.sunrise-sunset {\n    display: grid;\n    grid-template-rows: auto repeat(2, 1fr);\n    align-items: center;\n    gap: 0px;\n}\n\n.sunrise-sunset .icon {\n    width: 30px;\n}\n\n.sunrise-container,\n.sunset-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-items: center;\n    gap: 15px;\n}\n\n.sunset-container {\n    align-self: start;\n}\n\n.blurry-background {\n    width: 100%;\n    height: 100%;\n\n    position: absolute;\n\n    background-color: rgba(164, 164, 164, 0.549);\n    backdrop-filter: blur(5px);\n    z-index: 1;\n}\n\n.error-card {\n    position: sticky;\n    padding: 20px;\n    border-radius: var(--border-radius);\n\n    top: 20%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n\n    display: grid;\n    grid-template-rows: 15px 1fr 15px;\n    grid-template-columns: 50px 1fr;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n\n    background-color: rgb(255, 255, 255);\n}\n\n.close-button {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    justify-self: end;\n}\n\n.error-image {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    width: 100%;\n}\n",""]);const s=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=i(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),o=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class g{constructor(n,e,t,r,i,a,o,s,c,d,l,u,p,m,h,g,f,b,y,v,w,x){this.location=n,this.date=e,this.unit=t,this.highTemperature=r,this.lowTemperature=i,this.generalWeatherStatus=a,this.generalWeatherIcon=o,this.currentTemperature=s,this.currentHourWeatherStatus=c,this.currentHourWeatherIcon=d,this.uvIndex=l,this.sunset=u,this.sunrise=p,this.moonPhase=m,this.moonRise=h,this.wind=g,this.precipitation=f,this.feelsLike=b,this.humidity=y,this.visibility=v,this.pressure=w,this.averages=x}}function f(n){const e=n[0][0].date.currentTime.split(":")[0];return n[0][e]}function b(n,e,t,r){const i=document.createElement("div");i.classList.add("highlight-card");const a=document.createElement("div");a.classList.add("heading-container"),i.appendChild(a);const o=document.createElement("div");o.classList.add("icon-container"),a.appendChild(o);const s=document.createElement("img");s.classList.add("highlight-icon"),s.src=e,o.appendChild(s);const c=document.createElement("div");c.classList.add("highlight-name"),c.textContent=n,a.appendChild(c);const d=document.createElement("div");d.classList.add("value"),d.textContent=t,i.appendChild(d);const l=document.createElement("div");return l.classList.add("additional-notes"),l.textContent=r,i.appendChild(l),i}const y=t.p+"img/uv84ca40647609979fe37e.svg",v=t.p+"img/windf9455757d02247ce787d.svg",w=t.p+"img/sunset45f615ea119e5a1af90b.png",x=t.p+"img/sunrise2f522b1af5c815730b2b.png",C=t.p+"img/sun990a8d58b3d77d0ad7eb.png",k=t.p+"img/precipitationadf760e6bc039c45f948.png",L=t.p+"img/humidity7b91f5dc63cbc0d60df2.png",E=t.p+"img/visibility32d38dc4fc06883bfbcb.png",S=t.p+"img/pressureaddd5f60ff712c1a43a5.png",T=t.p+"img/feelsLike6d6c87236e32675bb436.png",M=t.p+"img/moon0666183071c2ad9c9c53.png";class I{constructor(n){this.icon=x,this.time=n,this.type="Sunrise"}}class ${constructor(n){this.icon=w,this.time=n,this.type="Sunset"}}function H(n){let[e,t]=n.split(" "),[r,i]=e.split(":");return r=parseInt(r),i=parseInt(i),"PM"===t&&(r+=12),{hours:r,minutes:i}}const j=t.p+"img/no-locationd2c2698174bb0ca090a2.png";let D="c";async function F(n,e){console.clear();const t=await async function(n){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0f21e3cdb5ce4371bf4215345230411&q=${n}&days=10`,{mode:"cors"});if(200!==e.status)throw new Error(`Failed to fetch data. Status: ${e.status}`);const t=await e.json(),r={forecastLocation:t.location,nDayForecast:t.forecast.forecastday};return console.log(r),r}catch(n){return console.log(n),null}}(n);if(t){W=n;const r=function(n,e){const{forecastLocation:t,nDayForecast:r}=n,i=r.map((n=>n.hour.map((r=>new g(t.name,{currentTime:t.localtime.split(" ")[1],currentDate:n.date,time:r.time.split(" ")[1]},e,n.day[`maxtemp_${e}`],n.day[`mintemp_${e}`],n.day.condition.text,n.day.condition.icon,r[`temp_${e}`],r.condition.text,r.condition.icon,r.uv,n.astro.sunset,n.astro.sunrise,n.astro.moon_phase,n.astro.moonrise,{windSpeed:r.wind_kph,windDirection:r.wind_dir,windAngle:r.wind_degree},r.precip_mm,r[`feelslike_${e}`],r.humidity,r.vis_km,r.pressure_mb,n.day[`avgtemp_${e}`])))));return console.log(i),i}(t,e);(function(n){const e=document.querySelector(".n-day-forecast-container");e.innerHTML="",n.forEach((n=>{const t=document.createElement("div");t.classList.add("daily-forecast-container"),e.appendChild(t);const r=document.createElement("div");r.classList.add("day-name"),r.innerHTML=function(n){let e="";const t=new Date(n.forecastDate),r=new Date(n.currentDate);return e=t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate()?"Today":r.toLocaleString("en-us",{weekday:"long"}),e}(n[0].date),t.appendChild(r);const i=document.createElement("img");i.classList.add("weather-icon"),i.src=n[0].generalWeatherIcon,t.appendChild(i);const a=document.createElement("div");a.classList.add("low"),a.textContent=`${n[0].lowTemperature}°`,t.appendChild(a);const o=document.createElement("div");o.classList.add("high"),o.textContent=`${n[0].highTemperature}°`,t.appendChild(o)}))})(r),function(n){const e=f(n),t=document.querySelector(".current-hour-info-container");t.innerHTML="";const r=document.createElement("div");r.classList.add("location"),r.textContent=e.location,t.appendChild(r);const i=document.createElement("img");i.classList.add("weather-icon"),i.src=e.currentHourWeatherIcon,t.appendChild(i);const a=document.createElement("div");a.classList.add("main-temperature"),a.textContent=`${e.currentTemperature}°`,t.appendChild(a);const o=document.createElement("div");o.classList.add("weather-description"),o.textContent=e.currentHourWeatherStatus,t.appendChild(o);const s=document.createElement("div");s.classList.add("high"),s.textContent=`H: ${e.highTemperature}°`,t.appendChild(s);const c=document.createElement("div");c.classList.add("low"),c.textContent=`L: ${e.lowTemperature}°`,t.appendChild(c)}(r),function(n){const e=document.querySelector(".todays-highlights-container");var t,r,i,a,o,s,c,d;e.innerHTML="",e.appendChild((t=n.uvIndex,b("UV Index",y,t,function(n){let e="";switch(!0){case n>=0&&n<=2:e="Minimal danger. Up to 1 hour sun, no burning.";break;case n>=3&&n<=5:e="Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection.";break;case n>=6&&n<=7:e="Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas.";break;case n>=8&&n<=10:e="High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection.";break;default:e="Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection."}return e}(t)))),e.appendChild((r=n.wind,b("Wind",v,`${r.windSpeed} km/h`,function(n){let e="";switch(!0){case n<1:e="Calm conditions.";break;case n<4:e="Light air.";break;case n<7:e="Gentle breeze.";break;case n<11:e="Moderate wind.";break;case n<17:e="Fresh breeze.";break;case n<22:e="Strong wind.";break;case n<28:e="High wind, moderate gale, near gale.";break;case n<34:e="Gale.";break;case n<41:e="Strong gale.";break;case n<48:e="Storm.";break;case n<56:e="Violent storm.";break;default:e="Hurricane force."}return e}(r.windSpeed)))),e.appendChild(function(n,e){const t=document.createElement("div");t.classList.add("highlight-card","sunrise-sunset");const r=document.createElement("div");r.classList.add("heading-container"),t.appendChild(r);const i=document.createElement("div");i.classList.add("icon-container"),r.appendChild(i);const a=document.createElement("img");a.classList.add("highlight-icon"),a.src=C,i.appendChild(a);const o=document.createElement("div");o.classList.add("highlight-name"),o.textContent="Sun",r.appendChild(o);const s=document.createElement("div");s.classList.add("sunrise-container"),t.appendChild(s);const c=document.createElement("img");c.src=x,c.classList.add("icon"),s.appendChild(c);const d=document.createElement("div");d.classList.add("sunrise-time"),d.textContent="0"===n.split("")[0]?n.slice(1):n,s.appendChild(d);const l=document.createElement("div");l.classList.add("sunset-container"),t.appendChild(l);const u=document.createElement("img");u.src=w,u.classList.add("icon"),l.appendChild(u);const p=document.createElement("div");return p.classList.add("sunset-time"),p.textContent="0"===e.split("")[0]?e.slice(1):e,l.appendChild(p),t}(n.sunrise,n.sunset)),e.appendChild((i=n.precipitation,b("Precipitation",k,i,function(n){let e;switch(!0){case 0===n:e="No rainfall";break;case n>0&&n<=5:e="Light rain, carry an umbrella.";break;case n>5&&n<=15:e="Moderate rain, expect wet conditions.";break;case n>15&&n<=30:e="Heavy rain, caution in travel.";break;case n>30&&n<=50:e="Very heavy rain, potential flooding.";break;case n>50&&n<=75:e="Intense rain, high flood risk.";break;default:e="Extreme rain, major flooding possible."}return e}(i)))),e.appendChild((a=n.humidity,b("Humidity",L,a,function(n){let e="";return e=n>=0||n<=30?"Dry, Arid":n>30||n<=60?"Comfortable":"Humid, Muggy",e}(a)))),e.appendChild((o=n.visibility,b("Visibility",E,`${o} km`,function(n){let e="";switch(!0){case n>=16:e="Excellent visibility.";break;case n>=10&&n<16:e="Good visibility.";break;case n>=5&&n<10:e="Moderate visibility.";break;case n>=1.6&&n<5:e="Poor visibility.";break;case n<1.6:e="Very poor visibility.";break;default:e="Visibility information not available."}return e}(o)))),e.appendChild((s=n.pressure,b("Pressure",S,`${s} hPa`,function(n){let e;switch(!0){case 0===n:e="No pressure data available.";break;case n<1e3:e="Low pressure detected.";break;case n>1e3&&n<=1013:e="Normal pressure conditions.";break;case n>1013&&n<=1020:e="Slightly elevated pressure.";break;case n>1020&&n<=1030:e="Moderately high pressure.";break;case n>1030&&n<=1040:e="High pressure, stable conditions.";break;case n>1040:e="Extremely high pressure, unusual conditions."}return e}(s)))),e.appendChild(function(n,e){const t=b("Feels Like",T,`${n}°`,function(n,e){let t="";switch(!0){case"f"===e&&n>=86||"c"===e&&n>=30:t="Hot Weather";break;case"f"===e&&n>=68&&n<86||"c"===e&&n>=20&&n<30:t="Warm Weather";break;case"f"===e&&n>=50&&n<68||"c"===e&&n>=10&&n<20:t="Mild Weather";break;case"f"===e&&n>=32&&n<50||"c"===e&&n>=0&&n<10:t="Cool Weather";break;case"f"===e&&n>=14&&n<32||"c"===e&&n>=-10&&n<0:t="Cold Weather";break;case"f"===e&&n<14||"c"===e&&n<-10:t="Freezing Weather";break;default:t="Variable Conditions"}return t}(n,e));return t}(n.feelsLike,n.unit)),e.appendChild((c=n.moonPhase,d=n.moonRise,b("Moon",M,c,d)))}(f(r)),function(n){const e=document.querySelector(".hourly-forecast-container");e.innerHTML="";const t=function(n){const e=H(n[0][0].date.currentTime);let t=[];t=t.concat(n[0].slice(e.hours)),t=t.concat(n[1].slice(0,e.hours+1));const r=H(n[0][0].sunrise),i=H(n[0][0].sunset),a=H(n[1][0].sunrise),o=H(n[1][0].sunset);if(r.hours>e.hours||r.hours===e.hours&&r.minutes>e.minutes){const e=new I(n[0][0].sunrise),i=t.findIndex((n=>{if(n instanceof g)return parseInt(n.date.time.split(":")[0])===r.hours}));t.splice(i+1,0,e)}else{const e=new I(n[1][0].sunrise),r=t.findIndex((n=>{if(n instanceof g)return parseInt(n.date.time.split(":")[0])===a.hours&&n.currentDate!==t[0].date.currentDate}));t.splice(r+1,0,e)}if(i.hours>e.hours||i.hours===e.hours&&i.minutes>e.minutes){const e=new $(n[0][0].sunset),r=t.findIndex((n=>{if(n instanceof g)return parseInt(n.date.time.split(":")[0])===i.hours}));t.splice(r+1,0,e)}else{const e=new $(n[1][0].sunset),r=t.findIndex((n=>{if(n instanceof g)return parseInt(n.date.time.split(":")[0])===o.hours&&n.currentDate!==t[0].date.currentDate}));t.splice(r+1,0,e)}return t}(n);t.forEach((n=>{const r=document.createElement("div");r.classList.add("hour-container");const i=document.createElement("div");i.classList.add("time"),r.appendChild(i);const a=document.createElement("img");if(r.appendChild(a),n instanceof g){const e=t[0].date.currentDate,s=H(t[0].date.currentTime),c=parseInt(n.date.time.slice(0,2),10);c===s.hours&&n.date.currentDate===e?i.textContent="Now":i.textContent=`${(o=c)%12||12} ${o<12?"AM":"PM"}`,a.classList.add("weather-icon"),a.src=n.currentHourWeatherIcon;const d=document.createElement("div");d.classList.add("temperature"),d.textContent=`${n.currentTemperature}°`,r.appendChild(d)}else if(n instanceof I||n instanceof $){"0"===n.time.split("")[0]&&(n.time=n.time.slice(1)),i.textContent=n.time,a.classList.add(`${n.type.toLowerCase()}-icon`),a.src=n.icon;const e=document.createElement("div");e.classList.add("sunrise-sunset-classifier"),e.textContent=`${n.type}`,r.appendChild(e)}var o;e.appendChild(r)}))}(r)}else!function(n){document.querySelector("input").disabled=!0;const e=function(n){const e=document.createElement("div");e.classList.add("blurry-background"),document.body.appendChild(e);const t=document.createElement("div");t.classList.add("error-card"),e.appendChild(t);const r=document.createElement("div");r.classList.add("close-button"),r.textContent="X",r.addEventListener("click",(()=>{e.remove();const n=document.querySelector("input");n.disabled=!1,n.value=""})),t.appendChild(r);const i=document.createElement("img");i.classList.add("error-image"),i.src=j,t.appendChild(i);const a=document.createElement("div");return a.classList.add("error-message"),a.textContent=n,t.appendChild(a),e}(n);document.body.appendChild(e)}("Location not found.")}let W="London";F(W,D);const P=document.querySelector("form");P.addEventListener("submit",(n=>{n.preventDefault(),F(P.querySelector("#search-location").value,D)}));const _=document.querySelector(".fahrenheit"),z=document.querySelector(".celsius");_.addEventListener("click",(()=>{D="f",_.classList.contains("selected-unit")||(_.classList.add("selected-unit"),F(W,D)),z.classList.remove("selected-unit")})),z.addEventListener("click",(()=>{D="c",z.classList.contains("selected-unit")||(z.classList.add("selected-unit"),F(W,D)),_.classList.remove("selected-unit")}))})()})();