const weatherForm = document.querySelector(".js-weather");
const API_KEY = "49d40be1eafdc741cfa6be31c0c2c196";
const COORDS ="coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function paintWeather(coordsObj){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordsObj.lat}&lon=${coordsObj.long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weatherForm.innerHTML = `${temperature} @ ${place}`;
    })
}

function handleGeoSucces(event){
    lat = event.coords.latitude;
    long = event.coords.longitude;
    const coordsObj = {
        lat,
        long
    };
    saveCoords(coordsObj);
    paintWeather(coordsObj);
}

function handleGeoError(){
    alert("we can't access your location ");
}

function getCoords(){
     navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);

}

function loadWeather(){
   const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        getCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        paintWeather(parsedCoords);
    }
}

function init(){
    loadWeather();
}

init();
