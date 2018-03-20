import {constants} from '../actions/constants'

export default function userReducer(state = null, action){
    switch(action.type){
        case constants.SET_AUTHORIZATION_STATE:
        return {...state, isLoggedIn: action.payload}
        default:
        return state;
    }
}