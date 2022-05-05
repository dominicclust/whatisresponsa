import { csrfFetch } from "./csrf";

const GET_ANSWERS = 'answers/getAnswers';
const POST_ANSWER = 'answers/postAnswer';
const EDIT_ANSWER = 'answers/editAnswer';
const DELETE_ANSWER = 'answers/deleteAnswer'

const getAnswers = (answers) => {
    return {
        type: GET_ANSWERS,
        payload: answers
    }
}

const postAnswer = (answer) => {
    return {
        type: POST_ANSWER,
        payload: answer
    }
}

const editAnswer = (answer) => {
    return {
        type: EDIT_ANSWER,
        payload: answer
    }
}
const deleteAnswer = (answer) => {
    return {
        type: DELETE_ANSWER,
        payload: answer
    }
}

export const answerFetch = () => async (dispatch) => {
    const response = await csrfFetch('/api/answers')
    if (response.ok) {
        const answers = await response.json();
        console.log(answers)
        dispatch(getAnswers(answers))
    }
}

export const addAnswer = (answer) => async (dispatch) => {
    const {body, userId} = answer;
    const response = await csrfFetch('/api/answers', {
        method: 'POST',
        body: JSON.stringify({
            body,
            userId
        })
    })
    if (response.ok) {
        const answer = response.json()
        dispatch(postAnswer(answer))
    }
}

export const answerEditor = (answer) => async(dispatch) => {
    const {body, userId} = answer;
    const response = await csrfFetch('/api/answers', {
        method: 'PUT',
        body: JSON.stringify({body, userId})
    })
    if (response.ok) {
        const answer = response.json()
        dispatch(editAnswer(answer))
    }
}
export const answerDestroyer = (answer) => async(dispatch) => {

    dispatch(deleteAnswer(answer))
}

const initialState = {entries: []}

const answersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ANSWERS:
            newState = {...state}
            newState.entries = action.payload
            return newState;

        case POST_ANSWER:
            newState = {...state}
            newState.entries = [...newState.entries, action.payload];
            return newState;

        case EDIT_ANSWER:
            newState = {...state}
            newState.entries = [...newState.entries, action.payload]
            return newState;

        case DELETE_ANSWER:
            newState = {...state}
            newState.entries.delete(action.payload)
            return newState;

        default: return state;
    }
}
export default answersReducer;
