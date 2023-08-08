function toggleMenu() {
    var header = document.getElementById('header-menu-burger');    
    if(header.style.display == "flex") { // if is menuBox displayed, hide it
        header.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "";
    }
  }

  toggleMenu();




// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();