const initData = [
  { name: "Gavin Shinfield", postcode: "GU1 3SE" },
  { name: "Laurent Maguire", postcode: "GU1 3XN" },
  { name: "Piers Palmer	Witley", postcode: "GU8 5RA" },
  { name: "Steven Wake", postcode: "GU14 8SX" },
  { name: "Nick Linnell", postcode: "GU8 5JH" },
  { name: "Duncan Roberston", postcode: "GU7 1LU" },
  { name: "David Quilter ", postcode: "GU14 9PJ" },
  { name: "Harry Ford", postcode: "GU9 8WF" },
  { name: "Olly Percival ", postcode: "GU1 2PZ" },
  { name: "Pete White", postcode: "GU15 2BY" },
  { name: "Andy West", postcode: "IP25 7DR" },
  { name: "Chris Cannacott", postcode: "KT23 3AQ" },
  { name: "Amy Johnstone", postcode: "GU21 3JP" },
  { name: "Helen Beardshall (nee McCarthy)", postcode: "RG25 2RB" },
  { name: "Steve Butler", postcode: "GU2 7RT" },
  { name: "Tom Marshall", postcode: "RG41 2AW" },
  { name: "Jess Mitchell", postcode: "GU1 4LN" },
  { name: "Darby Manning", postcode: "GU12 4RD" },
  { name: "David Cocks", postcode: "GU1 1DN" },
  { name: "Zoe Turner", postcode: "GU21 4SD" },
  { name: "Jamie Hunter", postcode: "GU11 1FL" },
  { name: "Will Poole", postcode: "KT22 9BX" },
  { name: "Richard Brett", postcode: "GU5 0EW" },
  { name: "Damian Boni", postcode: "SY23 2HN" },
  { name: "Chris Myers", postcode: "GU35 0FU" },
  { name: "Michael Hogg", postcode: "KT22 7JL" },
  { name: "Josh Jiminez", postcode: "GU1 2SP" },
  { name: "Becky Baxter", postcode: "GU17 9FL" },
  { name: "Ian Robinson", postcode: "GU51 1BW" },
  { name: "Simon Hardy", postcode: "RG24 8BT" },
  { name: "Andrew Peng	", postcode: "GU2 7SN" },
  { name: "Andy Pike", postcode: "GU21 8AG" },
  { name: "Mark Gangel", postcode: "GU4 7YW" },
  { name: "Charlotte Bell", postcode: "PL13 2QR" },
  { name: "Rebecca Brennan", postcode: "GU1 3SA" },
  { name: "Scott Matthewman", postcode: "E14 0BN" },
  { name: "Farhad Ajaz", postcode: "KT19 0SB" },
  { name: "Rob Wills", postcode: "BH31 7PT" },
  { name: "Guillaume Lannes", postcode: "W14 0AL" },
  { name: "Tharindra Perera", postcode: "KT15 1FQ" },
  { name: "Robin Marsden", postcode: "HA9 7SF" },
  { name: "Henry Lo", postcode: "WD18 7BL" },
  { name: "Claire Chase", postcode: "TW19 5EN" },
  { name: "Henry Price", postcode: "GU5 0DY" },
  { name: "Mike Dunkling", postcode: "TN23 3RU" },
  { name: "Louise Green", postcode: "SW17 0PP" },
  { name: "Madis Lond", postcode: "HP2 5BX" },
  { name: "Melissa Mays", postcode: "GU1 2BZ" },
  { name: "Gladwin Dosunmu", postcode: "WD18 7JH" },
  { name: "Saranne Richter", postcode: "W1H 5AS" },
  { name: "Ben Horsley-Summer", postcode: "GU12 6BS" },
  { name: "Stephen Dawson", postcode: "GU4 8LQ" },
  { name: "Mark Hil", postcode: "E8 2DZ" },
  { name: "Carmen Lopez Guerra", postcode: "Espartinas, Sevilla, Spain" },
  { name: "Katie Buckley", postcode: "GU27 2AP" },
  { name: "Hari Wyn-Williams", postcode: "SA17 4AD" },
  { name: "Lawrence Hall", postcode: "SE13 5LT" },
  { name: "Pete McQueen", postcode: "BR2 7DP" },
];

let locations = [];

let map;
let geocoder;

function initMap() {
  geocoder = new google.maps.Geocoder();

  const officeLocation = { lat: 51.23535, lng: -0.57407 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: officeLocation,
  });

  new google.maps.Marker({
    position: officeLocation,
    map: map,
  });

  new google.maps.Circle({
    map: map,
    center: officeLocation,
    radius: 32186.9, // 20 miles in metres
    fillColor: "#fff",
  });

  initData.forEach((data) => plotAddress(data));
}

function plotAddress(data) {
  geocoder.geocode({ address: data.postcode }, function (results, status) {
    if (status == "OK") {
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: "#000",
          fillOpacity: 1,
          scale: 3,
        },
      });
      console.log("done");
      locations.push({
        name: data.name,
        postcode: data.postcode,
        latlng: {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        },
      });
      console.log(locations.length);
      if (locations.length === initData.length) {
        console.log(JSON.stringify(locations, undefined, 2));
      }
    } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      console.log("limit");
      setTimeout(() => {
        console.log("waiting");
        plotAddress(data);
      }, 1000);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
