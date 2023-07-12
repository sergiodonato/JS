// Aprendendo sobre Geolocalização:
//

const long = document.getElementById('long')
const lati = document.getElementById('lati')

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(mostrarLocalização, erroLocalização)
}else {
  console.log('geolocalização ñ suportada')
}

function mostrarLocalização(pos) {
  long.innerHTML = `Longitude: ${pos.coords.longitude}` 
  lati.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function erroLocalização() {
  console.log('Erro ao obter a localização')
}