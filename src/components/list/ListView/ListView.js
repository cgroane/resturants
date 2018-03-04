import React, {Component} from 'react';
import {connect} from 'react-redux';

// import functions
import {getRestaurants, setLocation, setDistance, selectRestuarant} from './../../../ducks/reducer';
import {updateRestaurants} from './../../../functions/googleMaps';
import {mapToCard} from './ListUtility';

//import components
import ListItem from './../ListItem/ListItem';
import DetailsContainer from './../../details/DetailsContainer/DetailsContainer';

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
        if (!this.props.selectedRestaurant) {
            var restaurants = mapToCard(this.props.restaurants)
        }

        return (
            <div>
                <div>
                     {restaurants}
                </div>
                <div styles={'width: 100vw'} >
                    {this.props.selectedRestaurant && 
                    
                    <DetailsContainer selectedRestaurant={this.props.selectedRestaurant} userLocation={this.props.userLocation} />
                }
                    </div>
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {getRestaurants, setLocation, setDistance, selectRestuarant}) (ListView)