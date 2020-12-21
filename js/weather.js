const weather = document.querySelector('.js-weather')
const API_KEY = '350023f83ce4efcd17eac0a6aba03695';
const COORDS = 'coords';

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then(response => response.json())
      .then(json => {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
      })
}

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSucces = (position) => {
  const latitude = position.coords.latitude;
  const longtitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longtitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longtitude);
}

const handleGeoError = () => {
  console.log(`No location`);
}

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

const loadCoords = () => {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    getWeather(parseCoords.latitude, parseCoords.longtitude);
  }
}
loadCoords();
