import { FETCH_POSTS, NEW_POST } from './types';

//thunk middleware allows us to call dispatch function directly

export function fetchPosts(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
    }
}

export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(res => res.json()).then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
}