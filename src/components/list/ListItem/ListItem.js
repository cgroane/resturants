import React, {Component} from 'react';
import {connect} from 'react-redux'
import {css} from 'emotion';
import {styleItem} from './style';

import {selectRestuarant} from './../../../ducks/reducer';
import './ListItem.css';


class ListItem extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props)
    }
    comonentWillUpdate(nextProps, nextState) {
        console.log(this.props)
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
        var itemStyle = css`
            background-image: linear-gradient(to top, rgb(49,49,49) 0px, rgba(255,255,255,0), rgba(255,255,255, 0.3) 180px, rgba(255,255,255,0)), url("${thisRestuarant.backgroundImageURL}");
            
        `
        return (
            <div className={`listItem ${itemStyle}`} onClick={() => this.props.selectRestuarant(thisRestuarant)} >
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