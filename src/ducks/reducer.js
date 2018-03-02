import axios from 'axios';

const GET_RESTAURANTS = 'GET_RESTAURANTS';
const SET_RESTAURANTS = 'SET_RESTAURANTS';
const SET_LOCATION = 'SET_LOCATION';
const SET_DISTANCE = 'SET_DISTANCE';
const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
const CLEAR_SELECTED = 'CLEAR_SELECTED';

const initialState = {
    restaurants: [],
    restaurantStatic: [],
    userLocation: {},
    selectedRestaurant:  false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RESTAURANTS + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_RESTAURANTS + "_FULFILLED":
            return Object.assign({}, {restaurants: action.payload, restaurantStatic: action.payload, isLoading: false})
        case SET_LOCATION:
            return Object.assign({}, state, {userLocation: action.payload})
        case SET_DISTANCE:
            return Object.assign({}, state, {restaurants: action.payload, restaurantStatic: action.payload})
        case SELECT_RESTAURANT: 
            return Object.assign({}, state, {selectedRestaurant: action.payload})
        case CLEAR_SELECTED:
            return Object.assign({}, state, {selectedRestaurant: action.payload})
        default:
            return state;
    }
}

export function getRestaurants() {
    return {
        type: GET_RESTAURANTS,
        payload: axios.get('/api/restaurants').then(response => response.data)
    }
}

export function setLocation(location) {
    return {
        type: SET_LOCATION,
        payload: location,
    }
}
export function setDistance(array) {
    return {
        type: SET_DISTANCE,
        payload: array
    }
}
export function selectRestuarant(restaurant) {
    return {
        type: SELECT_RESTAURANT,
        payload: restaurant
    }
}

export function clearSelected() {
    return {
        type: CLEAR_SELECTED,
        payload: false
    }
}