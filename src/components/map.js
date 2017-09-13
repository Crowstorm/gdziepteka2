// import React from 'react';

// class GoogleMap extends React.Component{
//     render(){
//         return(
//             //this.refs.map
//             <div ref='map' id='googleMap'> <img src='http://i.imgur.com/ro5bn3v.png'></img></div>
//         )
//     }
// }

// export default GoogleMap;


import React from 'react';

export default class GoogleMap extends React.Component{
    constructor(){
        super();
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
            lat: -33.8688,
            lng: 141.2195
        }
    }

    componentDidMount(){
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {
                lat: this.state.lat, 
                lng: this.state.lng},
            zoom: 13,
            mapTypeId: 'roadmap',
        })
        console.log('loaded')
       
    }

    render(){
        return(
            <div>
                <div id='map' />
            </div>
        )
    }
}



















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
