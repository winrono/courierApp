import {constants} from './constants'

export function setAuthorizationState(value){
    return {
        type: constants.SET_AUTHORIZATION_STATE,
        payload: value
    }
}