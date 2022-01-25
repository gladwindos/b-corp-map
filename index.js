const employeeData = [
  {
    name: "Pete White",
    postcode: "GU15 2BY",
    latlng: {
      lat: 51.3345648,
      lng: -0.7236597,
    },
  },
  {
    name: "Gavin Shinfield",
    postcode: "GU1 3SE",
    latlng: {
      lat: 51.235704,
      lng: -0.566247,
    },
  },
  {
    name: "Harry Ford",
    postcode: "GU9 8WF",
    latlng: {
      lat: 51.2044205,
      lng: -0.8154511999999999,
    },
  },
  {
    name: "Piers Palmer Witley",
    postcode: "GU8 5RA",
    latlng: {
      lat: 51.1579085,
      lng: -0.6571220999999999,
    },
  },
  {
    name: "Andy West",
    postcode: "IP25 7DR",
    latlng: {
      lat: 52.63165069999999,
      lng: 0.7869813000000001,
    },
  },
  {
    name: "Nick Linnell",
    postcode: "GU8 5JH",
    latlng: {
      lat: 51.1715379,
      lng: -0.6505613,
    },
  },
  {
    name: "Steven Wake",
    postcode: "GU14 8SX",
    latlng: {
      lat: 51.30529240000001,
      lng: -0.7712819,
    },
  },
  {
    name: "Olly Percival ",
    postcode: "GU1 2PZ",
    latlng: {
      lat: 51.2402494,
      lng: -0.5418086,
    },
  },
  {
    name: "Duncan Roberston",
    postcode: "GU7 1LU",
    latlng: {
      lat: 51.1897945,
      lng: -0.5941892999999999,
    },
  },
  {
    name: "David Quilter ",
    postcode: "GU14 9PJ",
    latlng: {
      lat: 51.3029591,
      lng: -0.7803241,
    },
  },
  {
    name: "Laurent Maguire",
    postcode: "GU1 3XN",
    latlng: {
      lat: 51.2304098,
      lng: -0.5708517000000001,
    },
  },
  {
    name: "Chris Cannacott",
    postcode: "KT23 3AQ",
    latlng: {
      lat: 51.2790904,
      lng: -0.3869458,
    },
  },
  {
    name: "Amy Johnstone",
    postcode: "GU21 3JP",
    latlng: {
      lat: 51.3197705,
      lng: -0.601459,
    },
  },
  {
    name: "Helen Beardshall (nee McCarthy)",
    postcode: "RG25 2RB",
    latlng: {
      lat: 51.230375,
      lng: -1.0017356,
    },
  },
  {
    name: "Steve Butler",
    postcode: "GU2 7RT",
    latlng: {
      lat: 51.2297397,
      lng: -0.6138269,
    },
  },
  {
    name: "Tom Marshall",
    postcode: "RG41 2AW",
    latlng: {
      lat: 51.4055644,
      lng: -0.8447091,
    },
  },
  {
    name: "Jess Mitchell",
    postcode: "GU1 4LN",
    latlng: {
      lat: 51.2390903,
      lng: -0.5725598,
    },
  },
  {
    name: "Darby Manning",
    postcode: "GU12 4RD",
    latlng: {
      lat: 51.2457928,
      lng: -0.7478948999999999,
    },
  },
  {
    name: "David Cocks",
    postcode: "GU1 1DN",
    latlng: {
      lat: 51.2470432,
      lng: -0.574334,
    },
  },
  {
    name: "Zoe Turner",
    postcode: "GU21 4SD",
    latlng: {
      lat: 51.32341479999999,
      lng: -0.5777392,
    },
  },
  {
    name: "Jamie Hunter",
    postcode: "GU11 1FL",
    latlng: {
      lat: 51.2537542,
      lng: -0.7617073999999999,
    },
  },
  {
    name: "Will Poole",
    postcode: "KT22 9BX",
    latlng: {
      lat: 51.2905929,
      lng: -0.3381245,
    },
  },
  {
    name: "Richard Brett",
    postcode: "GU5 0EW",
    latlng: {
      lat: 51.1908865,
      lng: -0.557549,
    },
  },
  {
    name: "Damian Boni",
    postcode: "SY23 2HN",
    latlng: {
      lat: 52.4177639,
      lng: -4.082388,
    },
  },
  {
    name: "Chris Myers",
    postcode: "GU35 0FU",
    latlng: {
      lat: 51.1187961,
      lng: -0.8591622999999999,
    },
  },
  {
    name: "Michael Hogg",
    postcode: "KT22 7JL",
    latlng: {
      lat: 51.296141,
      lng: -0.3292462,
    },
  },
  {
    name: "Josh Jiminez",
    postcode: "GU1 2SP",
    latlng: {
      lat: 51.2413246,
      lng: -0.5451127,
    },
  },
  {
    name: "Becky Baxter",
    postcode: "GU17 9FL",
    latlng: {
      lat: 51.3048835,
      lng: -0.7933279,
    },
  },
  {
    name: "Ian Robinson",
    postcode: "GU51 1BW",
    latlng: {
      lat: 51.2923534,
      lng: -0.8612789,
    },
  },
  {
    name: "Simon Hardy",
    postcode: "RG24 8BT",
    latlng: {
      lat: 51.302658,
      lng: -1.0574161,
    },
  },
  {
    name: "Andrew Peng",
    postcode: "GU2 7SN",
    latlng: {
      lat: 51.23764250000001,
      lng: -0.6001093,
    },
  },
  {
    name: "Andy Pike",
    postcode: "GU21 8AG",
    latlng: {
      lat: 51.3156774,
      lng: -0.6043529,
    },
  },
  {
    name: "Mark Gangel",
    postcode: "GU4 7YW",
    latlng: {
      lat: 51.2564133,
      lng: -0.5523180999999999,
    },
  },
  {
    name: "Charlotte Bell",
    postcode: "PL13 2QR",
    latlng: {
      lat: 50.3315168,
      lng: -4.5199338,
    },
  },
  {
    name: "Rebecca Brennan",
    postcode: "GU1 3SA",
    latlng: {
      lat: 51.23690939999999,
      lng: -0.5670118,
    },
  },
  {
    name: "Scott Matthewman",
    postcode: "E14 0BN",
    latlng: {
      lat: 51.5086542,
      lng: -0.009521,
    },
  },
  {
    name: "Farhad Ajaz",
    postcode: "KT19 0SB",
    latlng: {
      lat: 51.360114,
      lng: -0.2515668,
    },
  },
  {
    name: "Rob Wills",
    postcode: "BH31 7PT",
    latlng: {
      lat: 50.8824254,
      lng: -1.8857242,
    },
  },
  {
    name: "Guillaume Lannes",
    postcode: "W14 0AL",
    latlng: {
      lat: 51.5009324,
      lng: -0.2164889,
    },
  },
  {
    name: "Tharindra Perera",
    postcode: "KT15 1FQ",
    latlng: {
      lat: 51.359451,
      lng: -0.50235,
    },
  },
  {
    name: "Robin Marsden",
    postcode: "HA9 7SF",
    latlng: {
      lat: 51.5557477,
      lng: -0.2924446,
    },
  },
  {
    name: "Henry Lo",
    postcode: "WD18 7BL",
    latlng: {
      lat: 51.65609060000001,
      lng: -0.4179655,
    },
  },
  {
    name: "Claire Chase",
    postcode: "TW19 5EN",
    latlng: {
      lat: 51.4622156,
      lng: -0.5676863,
    },
  },
  {
    name: "Henry Price",
    postcode: "GU5 0DY",
    latlng: {
      lat: 51.1978346,
      lng: -0.5565591,
    },
  },
  {
    name: "Mike Dunkling",
    postcode: "TN23 3RU",
    latlng: {
      lat: 51.1547279,
      lng: 0.8502541,
    },
  },
  {
    name: "Louise Green",
    postcode: "SW17 0PP",
    latlng: {
      lat: 51.43430129999999,
      lng: -0.1793468,
    },
  },
  {
    name: "Madis Lond",
    postcode: "HP2 5BX",
    latlng: {
      lat: 51.7572602,
      lng: -0.4702157,
    },
  },
  {
    name: "Melissa Mays",
    postcode: "GU1 2BZ",
    latlng: {
      lat: 51.2369247,
      lng: -0.5528867,
    },
  },
  {
    name: "Gladwin Dosunmu",
    postcode: "CR4 1QB",
    latlng: {
      lat: 51.395908,
      lng: -0.1322686,
    },
  },
  {
    name: "Saranne Richter",
    postcode: "W1H 5AS",
    latlng: {
      lat: 51.5154412,
      lng: -0.1631132,
    },
  },
  {
    name: "Ben Horsley-Summer",
    postcode: "GU12 6BS",
    latlng: {
      lat: 51.2521403,
      lng: -0.7072993000000001,
    },
  },
];

const twentyMilesInMetres = 32186.9;
const thirtyMilesInMetres = 48280.3;

let map;
let geocoder;

function initMap() {
  geocoder = new google.maps.Geocoder();
  const officeLocation = { lat: 51.23535, lng: -0.57407 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: officeLocation,
  });

  // plot office location
  const officeMarker = new google.maps.Marker({
    position: officeLocation,
    map: map,
  });
  addInfoWindowToMarker(map, officeMarker, "Office");

  // draw radius around office
  new google.maps.Circle({
    map: map,
    center: officeLocation,
    radius: twentyMilesInMetres,
    fillColor: "red",
    strokeColor: "red",
  });
  addLabelToRadius(map, officeLocation, twentyMilesInMetres, "20 miles");

  new google.maps.Circle({
    map: map,
    center: officeLocation,
    radius: thirtyMilesInMetres,
    fillColor: "green",
    strokeColor: "green",
  });
  addLabelToRadius(map, officeLocation, thirtyMilesInMetres, "30 miles");

  // plot employee addresses
  employeeData.forEach((data) => {
    const marker = new google.maps.Marker({
      map: map,
      position: data.latlng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "#000",
        fillOpacity: 1,
        scale: 2,
        title: data.name,
      },
    });

    addInfoWindowToMarker(
      map,
      marker,
      `<span class="employee-label"><h4>${data.name}</h4><p>${data.postcode}</p></span>`
    );
  });

  updateMarkerCounters(map, officeLocation);
}

function customInfoWindow(content) {
  return new google.maps.InfoWindow({
    content: content,
  });
}

function addInfoWindowToMarker(map, marker, content) {
  const infoWindow = customInfoWindow(content);

  marker.addListener("mouseover", () => {
    infoWindow.open({
      anchor: marker,
      map,
    });

    infoWindow.setZIndex(1);
  });

  marker.addListener("mouseout", () => {
    infoWindow.close();
  });
}

function addLabelToRadius(map, circleCentre, radius, infoWindowContent) {
  const spherical = google.maps.geometry.spherical;

  const labelPosition = spherical.computeOffset(circleCentre, radius, 0);

  const labelMarker = new google.maps.Marker({
    map: map,
    position: labelPosition,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#fff",
      fillOpacity: 0,
      scale: 0,
    },
  });

  customInfoWindow(infoWindowContent).open({
    anchor: labelMarker,
    map,
  });
}

function updateMarkerCounters(map, officeLocation) {
  const spherical = google.maps.geometry.spherical;

  let counter20 = 0;
  let counter30 = 0;

  employeeData.forEach((data) => {
    const distance = spherical.computeDistanceBetween(
      officeLocation,
      data.latlng
    );

    if (distance < twentyMilesInMetres) {
      counter20 += 1;
      counter30 += 1;
    } else if (distance < thirtyMilesInMetres) {
      counter30 += 1;
    }
  });

  document.querySelector("#counter-20").innerHTML = counter20;
  document.querySelector("#counter-30").innerHTML = counter30;
  document.querySelector("#counter-total").innerHTML = employeeData.length;
}
