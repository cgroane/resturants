import React, {Component} from 'react';
import {connect} from 'react-redux';

// import functions
import {getRestaurants, setLocation, setDistance, selectRestuarant} from './../../../ducks/reducer';
import {updateRestaurants} from './../../../functions/googleMaps';

//import components
import ListItem from './../ListItem/ListItem';
import DetailsContainer from './../../details/DetailsContainer/DetailsContainer';

import './ListView.css';

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
            console.log(this.props.selectedRestaurant)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.userLocation !== prevProps.userLocation) {
            
            var restaurants = updateRestaurants.call(this, this.props.restaurants);
            this.props.setDistance(restaurants);
        }
        if (this.props.selected != prevProps.selected) {
            console.log(this.props.selected)
        }
    }
    
    selectRestaurant(restaurant) {
        this.setState({selectedRestaurant: restaurant})
    }
    deselect() {
        this.setState({selectedRestaurant: {}})
    }

    render() {
        // map into result card
        
        if (!this.props.selectedRestaurant) {
            var details = null;
            var restaurants = this.props.restaurants.map((cur, ind) => {
                return (
                    <ListItem 
                        key={ind} 
                        name={cur.name}
                        backgroundImageURL={cur.backgroundImageURL}
                        category={cur.category}
                        contact={cur.contact}
                        location={cur.location}
                        distance={cur.distance}
                        onClick={() => console.log('lkajsdf')} 
                    />
                )
            })
            
        } else {
            // var restaurants = null;
        }
        return (
            <div className="listView" >
                <div>
                     {restaurants}
                    
                </div>
                <div styles={'width: 100vw'} >
                    {this.props.selectedRestaurant && 
                    
                    <DetailsContainer selectedRestaurant={this.props.selectedRestaurant} userLocation={this.props.userLocation} />
                }
                {/* {details} */}
                    </div>
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {getRestaurants, setLocation, setDistance, selectRestuarant}) (ListView)