import React, {Component} from 'react';
import {connect} from 'react-redux'

import {styleItem} from './style';
import {selectRestuarant} from './../../../ducks/reducer';
import './ListItem.css';


class ListItem extends Component {
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    render() {
        // build restaurant object to pass props  
        const thisRestuarant = {
            name: this.props.name,
            backgroundImageURL: this.props.backgroundImageURL,
            category: this.props.category,
            contact: this.props.contact,
            location: this.props.location,
            distance: this.props.distance
        }
       // style background
        var itemStyle = styleItem(thisRestuarant)
       
        return (
            <div style={itemStyle} className="listItem" onClick={() => this.props.selectRestuarant(thisRestuarant)} >
                <div className="listItemTextContainer" >
                    <div className="listItemText" >
                        <span className="itemName nameFont" >{this.props.name}</span>
                    </div>
                    <div className="listItemText" >
                        <h2 className="itemCat catFont" >{this.props.category}</h2>
                    </div>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {selectRestuarant})(ListItem);