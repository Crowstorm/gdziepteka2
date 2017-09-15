
import React from 'react';
import {geolocated} from 'react-geolocated';


 class GoogleMap extends React.Component{
    componentDidMount(){var map, infoWindow;
    
      map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
      });
      infoWindow = new window.google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          var marker = new window.google.maps.Marker({
            position: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            map: map,
            draggable:true,
            title: 'Hello World!'})

        //   infoWindow.setPosition(pos);
        //   infoWindow.setContent('Location found.');
        //   infoWindow.open(map);
          map.setCenter(pos);

                  //marker listeners
                  window.google.maps.event.addListener(marker, 'dragstart', function() {
                    console.log('marker dotkniety');
                    document.getElementById('test').innerHTML = '<p>Currently dragging marker...</p>';
                });
        
                window.google.maps.event.addListener(marker, 'dragend', function(e) {
                   console.log('marker upuszczony');
                   document.getElementById('test').innerHTML = '<p>Do wyeksportowania: Current Lat: ' + e.latLng.lat().toFixed(3) + ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>'
                });
                
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });



      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }


}


    render(){

        
        return(
            <div>
                <div id='map' />
                <div id='test' />
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















