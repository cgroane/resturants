import React, {Component} from 'react';
import {connect} from 'react-redux'

import {selectRestuarant} from './../../../ducks/reducer';
import './ListItem.css';


class ListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {  
        const thisRestuarant = {
            name: this.props.name,
            backgroundImageURL: this.props.backgroundImageURL,
            category: this.props.category,
            contact: this.props.contact,
            location: this.props.location,
            distance: this.props.distance
        }
        var itemStyle = {
            backgroundImage: `linear-gradient(to top, rgb(49,49,49) 0px, transparent, rgba(255,255,255, 0.3) 180px, transparent), url(${thisRestuarant.backgroundImageURL})`,
            width: `100vw`,
            height: `180px`,
            color: `white`,
            display: `flex`,
            flexDirection: `row`,
            alignItems: `flex-end`,
            paddingBottom: `6px`,
            paddingLeft: `12px`,
            boxSizing: `border-box`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
            backgroundSize: `cover`

        }
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

// style card 