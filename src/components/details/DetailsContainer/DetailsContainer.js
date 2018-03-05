// media query should dictate horizontal vs vertical layout. 
import React, {Component} from 'react';
import {connect} from 'react-redux'
//import components
import DetailsMap from './../DetailsMap/DetailsMap';

//import functions

// import css
import './DetailsContainer.css';

//import google maps
const google = window.google;
class DetailsContainer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
                <div className={`detailsContainer `} >
                <DetailsMap selectedRestaurant={this.props.selectedRestaurant} userLocation={this.props.userLocation} />
                <div className="contentContainer" >
                    <div className="infoBar flex-column listItemTextContainer" > 
                        <span className="itemName" >{this.props.selectedRestaurant.name}</span>
                        <span className="itemCat" >{this.props.selectedRestaurant.category}</span>
                    </div>
                    <div className="flex-column " >
                        <div className="address details-box" >
                            <span className="listItemTextContainer info-text-padding detailFont" >
                                {this.props.selectedRestaurant.location.address}
                            </span>
                            <span className="listItemTextContainer info-text-padding detailFont" >
                                {this.props.selectedRestaurant.location.city}, {this.props.selectedRestaurant.location.state} {this.props.selectedRestaurant.location.zip}
                            </span>
                            <span className="listItemTextContainer info-text-padding detailFont" >
                                {this.props.selectedRestaurant.distance}
                            </span>
                        </div>
                        <div className="details-box listItemTextContainer" >
                            <span className="info-text-padding detailFont" >
                                {this.props.selectedRestaurant.contact.formattedPhone}
                            </span>
                        </div>
                        <div className="details-box listItemTextContainer" >
                            {this.props.selectedRestaurant.contact.twitter ?  
                            <span className="info-text-padding detailFont" >
                                @{this.props.selectedRestaurant.contact.twitter}
                            </span>
                                :
                                <span className="info-text-padding detailFont" >
                                No twitter handle available
                            </span>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = state => state
export default (DetailsContainer);