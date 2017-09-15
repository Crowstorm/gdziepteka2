
import React from 'react';
import {geolocated} from 'react-geolocated';


 class GoogleMap extends React.Component{


    componentDidMount(){
        var map, infoWindow;
        function initMap() {
          map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 6
          });
          infoWindow = new window.google.maps.InfoWindow;
  
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
  
              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        }
  
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }
    }


    // //sprawdz inne metody
    // componentWillReceiveProps(nextProps){
    //      let map = new window.google.maps.Map(document.getElementById('map'), {
    //         center: {
    //             lat: nextProps.coords.latitude, 
    //             lng: nextProps.coords.longitude},
    //         zoom: 15,
    //         mapTypeId: 'roadmap',
    //     }) 

    //     //marker on current position
    //     var marker = new window.google.maps.Marker({
    //         position: {
    //             lat: nextProps.coords.latitude, 
    //             lng: nextProps.coords.longitude
    //         },
    //         map: map,
    //         draggable:true,
    //         title: "You're here"
    //       });
          
    //       //marker listeners
    //       window.google.maps.event.addListener(marker, 'dragstart', function() {
    //         console.log('marker dotkniety');
    //         document.getElementById('test').innerHTML = '<p>Currently dragging marker...</p>';
    //     });

    //     window.google.maps.event.addListener(marker, 'dragend', function(e) {
    //        console.log('marker upuszczony');
    //        document.getElementById('test').innerHTML = '<p>Do wyeksportowania: Current Lat: ' + e.latLng.lat().toFixed(3) + ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>'
    //     });

        //search bar dla mapy
        // var input = document.getElementById('pac-input');
        // var searchBox = new window.google.maps.places.SearchBox(input);
        // map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

        // // Bias the SearchBox results towards current map's viewport.
        // map.addListener('bounds_changed', function() {
        //     searchBox.setBounds(map.getBounds());
        //   });


        // var markers = [];
        // // Listen for the event fired when the user selects a prediction and retrieve
        // // more details for that place.
        // searchBox.addListener('places_changed', function() {
        //     var places = searchBox.getPlaces();
        //     if (places.length == 0) {
        //       return;
        //     }
        // })

        // // Clear out the old markers.
        // markers.forEach(function(marker) {
        //     marker.setMap(null);
        //   });
        //   markers = [];

        // // For each place, get the icon, name and location.
        // var bounds = new window.google.maps.LatLngBounds();

        // searchBox.places.forEach(function(place) {
        // if (!place.geometry) {
        //     console.log("Returned place contains no geometry");
        //     return;
        // }
        // var icon = {
        //     url: place.icon,
        //     size: new window.google.maps.Size(71, 71),
        //     origin: new window.google.maps.Point(0, 0),
        //     anchor: new window.google.maps.Point(17, 34),
        //     scaledSize: new window.google.maps.Size(25, 25)
        // };  
        // })  
    

    render(){
        //skasuj
        console.log(this.props.coords);
        console.log(this.props, 'Propsy');
        //skasuj
        
        return(
            <div>
                <div id='map' />
                <input id="pac-input" className="controls" type="text" placeholder="Search Box" />
                <div id='pac-input'></div>
                <div id='test'></div>
            </div>
        )
    }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000
  })(GoogleMap); 















