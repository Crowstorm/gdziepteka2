
import React from 'react';
import {geolocated} from 'react-geolocated';


 class GoogleMap extends React.Component{
    constructor(props){
        super();
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
            lat: 33,
            lng: 44
        }
    }


    // componentDidMount(){
    //     let map = new window.google.maps.Map(document.getElementById('map'), {
    //         center: {
    //             lat: this.state.lat, 
    //             lng: this.state.lng},
    //         zoom: 13,
    //         mapTypeId: 'roadmap',
    //     })  
    // }

    componentWillReceiveProps(nextProps){
        console.log('will update')
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {
                lat: nextProps.coords.latitude, 
                lng: nextProps.coords.longitude},
            zoom: 15,
            mapTypeId: 'roadmap',
        })  
    }

    render(){
        //skasuj
        console.log(this.props.coords)
        console.log(this.props, 'Propsy');
        
        return(
            <div>
                <div id='map' />
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


















// import React from 'react';

// class GoogleMaps extends React.Component{
//     componentDidMount(){
//         new google.maps.Map(this.refs.map, {
//             zoom: 12,
//             center:{
//                 lat: 33, //this.props.lat,
//                 lng: 150//this.props.lon
//             }
//         })
//     }

//     render(){
//         return(
//             <div ref='map'></div>
//         )
//     }
// }

// export default GoogleMaps;
