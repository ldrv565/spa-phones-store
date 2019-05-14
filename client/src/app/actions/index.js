import axios from 'axios';

export const FETCH = 'FETCH';
export const SET_POSTS = 'SET_POSTS';
export const SET_CART = 'SET_CART';
export const SET_POST = 'SET_POST';
export const SET_VENDORS = 'SET_VENDORS';
export const PUT_CART = 'PUT_CART';

const url = '/api';

export function getPosts(query, onSuccess) {
    return dispatch => {
        dispatch({
            type: FETCH
        });
        return axios
            .get(`${url}/phones`, query)
            .then(response => response.data)
            .then(phones => {
                dispatch({
                    type: SET_POSTS,
                    payload: {
                        phones
                    }
                });
                onSuccess();
            });
    };
}

export function getVendors(query) {
    return dispatch => {
        dispatch({
            type: FETCH
        });

        return axios
            .get(`${url}/vendors`, query)
            .then(response => response.data)
            .then(vendors =>
                dispatch({
                    type: SET_VENDORS,
                    payload: {
                        vendors
                    }
                })
            );
    };
}

export function getCart(query) {
    return dispatch => {
        dispatch({
            type: FETCH
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
            type: FETCH
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

export function putCart(id, count) {
    return dispatch => {
        dispatch({
            type: FETCH
        });

        return axios
            .put(`${url}/cart`, null, { params: { id, count } })
            .then(() =>
                dispatch({
                    type: PUT_CART
                })
            );
    };
}
