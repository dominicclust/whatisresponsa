import { csrfFetch } from "./csrf"

const SET_USER = '/session/setUser'
const REMOVE_USER = '/session/removeUser'


const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

const removeUser = () => ({
    type: REMOVE_USER,
})



export const login = (user) => async (dispatch) => {
    const {credential, password} = user
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
           credential,
           password
        })
    });
    // for res status codes >= 400
    if (!response.ok) {
        return response.json()
    }
    // for res status codes <400
    const data = await response.json();
    dispatch(setUser(data.user))
    return data;
}
export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return data;
  };

export const logout = () => async(dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    dispatch(removeUser())
    return response;
}
export const signup = (user) => async (dispatch) => {
    const {username, email, password} = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password })
    })
    if (!response.ok) {
        return response.json()
    };
    const data = await response.json();
    dispatch(setUser(data.user))
    return data;
}

const initialState = {user: null};

const sessionReducer = (state = initialState, action)=>{
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = {...state}
            newState.user = action.user
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, initialState);
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
