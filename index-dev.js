const postcodes = [
  "GU1 3SE",
  "GU1 3XN",
  "GU8 5RA",
  "GU14 8SX",
  "GU8 5JH",
  "GU7 1LU",
  "GU14 9PJ",
  "GU9 8WF",
  "GU1 2PZ",
  "GU15 2BY",
  "IP25 7DR",
  "KT23 3AQ",
  "GU21 3JP",
  "RG25 2RB",
  "GU2 7RT",
  "RG41 2AW",
  "GU1 4LN",
  "GU12 4RD",
  "GU1 1DN",
  "GU21 4SD",
  "GU11 1FL",
  "KT22 9BX",
  "GU5 0EW",
  "SY23 2HN",
  "GU35 0FU",
  "KT22 7JL",
  "GU1 2SP",
  "GU17 9FL",
  "GU51 1BW",
  "RG24 8BT",
  "GU27SN",
  "GU21 8AG",
  "GU4 7YW",
  "PL13 2QR",
  "GU1 3SA",
  "E14 0BN",
  "KT19 0SB",
  "BH31 7PT",
  "W14 0AL",
  "KT15 1FQ",
  "HA9 7SF",
  "WD18 7BL",
  "TW19 5EN",
  "GU5 0DY",
  "TN23 3RU",
  "SW17 0PP",
  "HP2 5BX",
  "GU1 2BZ",
  "CR4 1QB",
  "W1H 5AS",
  "GU12 6BS",
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

  postcodes.forEach((postcode) => plotAddress(postcode));
}

function plotAddress(postcode) {
  geocoder.geocode({ address: postcode }, function (results, status) {
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
        postcode: postcode,
        latlng: {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        },
      });
      console.log(locations.length);
      if (locations.length === postcodes.length) {
        console.log(JSON.stringify(locations, undefined, 2));
      }
    } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      console.log("limit");
      setTimeout(() => {
        console.log("waiting");
        plotAddress(postcode);
      }, 1000);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
