import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const SET_CART = 'SET_CART';
export const SET_POST = 'SET_POST';

const url = '/api';

export function getPosts(query) {
    return dispatch => {
        dispatch({
            type: GET_POSTS
        });

        return axios
            .get(`${url}/phones`, query)
            .then(response => response.data)
            .then(phones =>
                dispatch({
                    type: SET_POSTS,
                    payload: {
                        phones
                    }
                })
            );
    };
}

export function getCart(query) {
    return dispatch => {
        dispatch({
            type: GET_POSTS
        });

        return axios
            .get(`${url}/cart`, query)
            .then(response => response.data)
            .then(phones =>
                dispatch({
                    type: SET_CART,
                    payload: {
                        phones
                    }
                })
            );
    };
}

export function getPost(id) {
    return dispatch => {
        dispatch({
            type: GET_POSTS
        });

        return axios
            .get(`${url}/phone/${id}`)
            .then(response => response.data)
            .then(phone =>
                dispatch({
                    type: SET_POST,
                    payload: {
                        ...phone
                    }
                })
            );
    };
}
