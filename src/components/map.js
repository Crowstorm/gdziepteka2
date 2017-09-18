
import React from 'react';



 class GoogleMap extends React.Component{

  constructor(props){
    super(props);
    //const getCoords = this.props.getCoords;
    this.handleLocationError = this.handleLocationError.bind(this);
    this.state = {
      lat: '',
      lon: ''
    }
  }

  getCoords() {
    const lat = this.state.lat;
    const lon = this.state.lon;
    this.props.getCoords(lat, lon)
    console.log('Pobieram coordy');
}

    componentDidMount(){
      var map, infoWindow;
      
    
      map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
      });
     

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log('this inside of geo', this);
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
          
            this.setState({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            })

            this.getCoords();
            


            document.getElementById('test').innerHTML = '<p>Want to export: Current Lat: ' + position.coords.latitude + ' Current Lng: ' + position.coords.longitude + '</p>';
            //console.log('dzialaj dziwko', this.state.lat);
        //   infoWindow.setPosition(pos);
        //   infoWindow.setContent('Location found.');
        //   infoWindow.open(map);
          map.setCenter(pos);

                  //marker listeners
          window.google.maps.event.addListener(marker, 'dragstart', function() {
              console.log('marker dotkniety');
              document.getElementById('test').innerHTML = '<p>Currently dragging marker...</p>';
          });
        
          
          window.google.maps.event.addListener(marker, 'dragend', (e) => {
            console.log('marker upuszczony');
            document.getElementById('test').innerHTML = '<p>Want to export: Current Lat: ' + e.latLng.lat().toFixed(3) + ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>';
            console.log(this, 'this inside the event listener');
            
            this.setState((  {
              lat: e.latLng.lat(),
             lon: e.latLng.lng()
           }))

           this.getCoords();

           console.log(this.state.lat, "PROSZE", this.state.lon)
            }
          );

          
        }, () => {
          this.handleLocationError(true, map.getCenter());
        });

        

      } else {
        // Browser doesn't support Geolocation
        this.handleLocationError(false, map.getCenter());
      }
    console.log('DID MOUNT');
    console.log(this);
    console.log(this.state);
}

handleLocationError(browserHasGeolocation, pos, map) {
  // infoWindow.setPosition(pos);
  // infoWindow.setContent(browserHasGeolocation ?
  //                       'Error: The Geolocation service failed.' :
  //                       'Error: Your browser doesn\'t support geolocation.');
  // infoWindow.open(map);
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
export default GoogleMap 















