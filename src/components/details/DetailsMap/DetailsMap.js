//  initiate map
import React, {Component} from 'react';
//import functions
import {initMap, setMarkers} from './../../../functions/googleMaps';
import './DetailsMap.css'


class DetailsMap extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        if (this.props.selectedRestaurant){
            initMap.call(this, this.gmap, this.props.selectedRestaurant)
            setMarkers.call(this, this.map, this.props.selectedRestaurant, this.props.userLocation)
        } else {
            initMap.call(this, this.gmap, {
                name: 'placeholder',
                location: {
                    lat: 32.8237831,
                    lng: -96.7702054
                }
            }, {
                    lat: 32.8237831,
                    lng: -96.7702054
            }
        )}
    }

    render(){
        return(
            <div className="mapBox" >
                    <div id="gmap" ref={ref => (this.gmap = ref)} />
                </div>
        )
    }
}

export default DetailsMap;