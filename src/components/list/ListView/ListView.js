import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slide-out';
// import functions
import {getRestaurants, setLocation, setDistance, selectRestuarant} from './../../../ducks/reducer';
import {updateRestaurants} from './../../../functions/googleMaps';
import {mapToCard} from './ListUtility';

//import components
import ListItem from './../ListItem/ListItem';
import DetailsContainer from './../../details/DetailsContainer/DetailsContainer';

import 'react-slide-out/lib/index.css';

class ListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRestaurant: null
        }
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                var userLoc = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                this.props.setLocation(userLoc)  
            })
            this.props.getRestaurants()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.userLocation !== prevProps.userLocation) {
            
            var restaurants = updateRestaurants.call(this, this.props.restaurants);
            this.props.setDistance(restaurants);
        }
    }
    
    render() {
        // map into result card
        if (!this.props.selectedRestaurant){
            var restaurants = mapToCard(this.props.restaurants)
        } else {
            var restaurants = null;
        }
        return (
            <div>
                <div className="listView" >
                     {restaurants}
                </div>
                <Slider isOpen={this.props.selectedRestaurant} verticalOffset={{top: 75, width: 100}} >
                <div styles={'width: 100vw'} >
                    {this.props.selectedRestaurant && 
                    
                    <DetailsContainer selectedRestaurant={this.props.selectedRestaurant} userLocation={this.props.userLocation} />
                }
                    </div>
                </Slider>
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {getRestaurants, setLocation, setDistance, selectRestuarant}) (ListView)