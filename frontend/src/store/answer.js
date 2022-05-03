import { csrfFetch } from "./csrf";

const GET_ANSWERS = 'answers/getAnswers';
const POST_ANSWER = 'answers/postAnswer';

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

export const answerFetch = (answers) => async (dispatch) => {
    const {clues} = answers
    const response = await fetch('https://jarchive-json.glitch.me/05/07/2004/1', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.Stringify({clues})
    })
    const data = await response.json()
    dispatch(setAnswers(data))
    return data
}

export const addAnswer = (answer) => async (dispatch) => {
    const {body, userId} = answer;
    const response = await csrfFetch('/api/answers', {
        method: 'POST',
        body: JSON.Stringify({
            body,
            userId
        })
    })
    const data = response.json()
    dispatch(postAnswer(answer))
}

const initialState = {answers: []}

const answersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ANSWERS:
            newState = {...state}
            newState.answers.push(action.payload.answers)
            return newState;
        case POST_ANSWER:
            newState = {...state}
            newState.answers = [action.payload, ...newState.answers]
    }
}
export default answersReducer;
