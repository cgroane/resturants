import React, {Component} from 'react';
import {connect} from 'react-redux';
import back from './../../assets/ic_webBack@2x.png'
import mapIcon from './../../assets/icon_map@2x.png'
//import functions
import {clearSelected} from './../../ducks/reducer';
//import style
import './Nav.css';

// import icons


class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <nav className="nav navbar fixed-top" >
            {this.props.selectedRestaurant ? 
            
            <div>
                <img src={back} onClick={this.props.clearSelected} />
            </div>
                :
            <div className="empty" >

            </div>
        }
                <div className="navText" >Lunch Tyme</div>
                <img className="mapIcon" src={mapIcon} />
            </nav>

        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {clearSelected})(Nav)