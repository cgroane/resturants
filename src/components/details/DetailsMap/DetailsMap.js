//  initiate map
import React, {Component} from 'react';
import {connect} from 'react-redux'
//import functions
import {initMap, setMarkers} from './../../../functions/googleMaps';
import './DetailsMap.css'

// instantiate google
const google = window.google;

class DetailsMap extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        
        initMap.call(this, this.gmap, this.props.selectedRestaurant)
        setMarkers.call(this, this.map, this.props.selectedRestaurant, this.props.userLocation)
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