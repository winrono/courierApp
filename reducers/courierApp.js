import userReducer from './user'
import { combineReducers } from 'redux'

const courierApp = combineReducers({
    user: userReducer
})

export default courierApp