import {SAVE_COMMENT, FETCH_COMMENTS, AUTH_ACTION} from './types'
import axios from 'axios'
export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments(){
    const comments=axios.get('https://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: comments
    }
}

export function authLogin(isLoggedIn){
    return {
        type:AUTH_ACTION,
        payload: isLoggedIn
    }
}