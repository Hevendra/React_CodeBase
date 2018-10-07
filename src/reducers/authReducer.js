import {AUTH_ACTION} from '../actions/types'
export default (state=false,action)=>{
    switch(action.type)
    {
        case AUTH_ACTION:
           return action.payload

        default:
            return state
    }
}