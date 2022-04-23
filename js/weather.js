
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "eb6a4cf95e978f5415e3bd3134ca5f1c"; 

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = data.name; 
    weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`; 
  });

}
function onGeoError(){
  alert("당신의 위치를 찾을 수 없어. 날시 정보를 제공하지 못합니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);