function toggleMenu() {
    var headerMenuBurger = document.getElementById('header-menu-burger');
    var headerMenuMobile = document.getElementById('header-menu-nav-mobilemenu');
    var jsMenu = document.getElementById('header-menu-nav-mobilemenu');
    var jsMenuItem = document.getElementById('header-menu-item');
    if(headerMenuBurger.style.display == 'flex') { // if is menuBox displayed, hide it
        headerMenuBurger.style.display = 'none';
        headerMenuMobile.style.display = 'flex';
        jsMenu.classList.add('js-menu-open');
        jsMenuItem.style.display = 'block';
    }
    else { // if is menuBox hidden, display it
      headerMenuBurger.style.display = 'flex';
    }
  }





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