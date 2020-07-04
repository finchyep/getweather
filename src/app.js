console.log('Welcome to getWeatherApp')

let docRegion = document.getElementById('region')
let docTemp = document.getElementById('temp')
let docCountry = document.getElementById('country')

let docBtn = document.getElementById('docBtn')
let docInp = document.getElementById('docInp')

let city = 'London'

console.log(city)

const apiKey = '6e2f8a21d07afdc87f6f239b7900b81a'
const unit = 'metric'
const lang = 'ru'
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

async function getWeather(city) {
  const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}&lang=${lang}`)
  const data = await getData.json()

  //console.log(data)

  const weatherData = {
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country
  }

  docRegion.innerHTML = weatherData.city
  docTemp.innerHTML = 'Температура: ' + weatherData.temp + '°C'
  docCountry.innerHTML = 'Страна:  ' + weatherData.country

  console.log(weatherData)
}

function addCity() {
  city = docInp.value
  console.log(city)
  getWeather(city)
}
