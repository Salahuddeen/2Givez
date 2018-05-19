const database = firebase.database();
const gardens = database.ref('garden/');
gardens.on('value', gotData);

// map api script
function initMap(zoomVal, uluru, marker) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoomVal,
    center: uluru
  });
  marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "Default"
  });
}

//retreive and set list values
function setupList(data){
  let str = "<option value='' disabled selected>Select your option</option>"
  let keys = Object.keys(data);
  for(let i = 0; i < keys.length; i++){
    str+=`<option value='${ data[keys[i]].id }'>${ data[keys[i]].id }</option>`
  }
  document.getElementById("gardens").innerHTML = str;
}

//initialize markers on map
function setMarkers(map ,data){
  // write this function
  let keys = Object.keys(data);
  var marker;
  for(let i = 0; i < keys.length; i++){
    marker = new google.maps.Marker({
      position: {lat: data[keys[i]].latitude, lng: data[keys[i]].longitude},
      map: map,
      title: "Garden: " + data[keys[i]].id
    });
  }
}

function gotData(data){
  var x = data.val();
  var zoomVal = 5;
  var uluru = {lat: 15.750595872075994, lng: -69.30744838707062};
  var map;
  var marker;
  setupList(x);
  initMap(zoomVal, uluru, marker);
  document.getElementById("countDrop").addEventListener('change', function(){
    let val = document.getElementById('countDrop').value;
    let position = {};
    console.log(val);
    for(let i = 0; i < countryDat.length; i++){
      if(countryDat[i].name === val){
        position = {
          lat: countryDat[i].lat,
          lng: countryDat[i].long
        }
      }
    }
    initMap(zoomVal, position, marker);
  });

  document.getElementById('gardens').addEventListener('change', function(){
    let val = document.getElementById('gardens').value;
    let db = database.ref('garden/'+ val);
    db.on('value', function(data){
      let position = {
        lat: data.val().latitude,
        lng: data.val().longitude
      };
      initMap(zoomVal, position, marker);
    });
  });
}


let countryDat = [
  {
    'name': 'TT',
    'long': -61.311951,
    'lat': 10.536421,
  },
  {
    'name': 'KN',
    'long': -62.754593,
    'lat': 17.363747,
  },
  {
    'name': 'JM',
    'long': -77.297508,
    'lat': 18.109581,
  },
  {
    'name': 'BD',
    'long': -59.598808,
    'lat': 13.113222,
  },
  {
    'name': 'HT',
    'long': -72.539291,
    'lat': 18.240438,
  }
]
