import {combineReducers} from 'redux'
import commentsReducer from './comments'
import authReducer from './authReducer'

export default combineReducers({
    comments:commentsReducer,
    auth: authReducer
})