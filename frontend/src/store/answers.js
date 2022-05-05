import { csrfFetch } from "./csrf";

const GET_ANSWERS = 'answers/getAnswers';
const POST_ANSWER = 'answers/postAnswer';

const getAnswers = answers => {
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

export const answerFetch = () => async (dispatch) => {
    const response = await csrfFetch('/api/answers')
    if (response.ok) {
        const answers = await response.json();
        dispatch(getAnswers(answers))
    }
}

export const addAnswer = (answer) => async (dispatch) => {
    const {body, userId, createdAt} = answer;
    const response = await csrfFetch('/api/answers', {
        method: 'POST',
        body: JSON.Stringify({
            body,
            userId,
            createdAt
        })
    })
    const data = response.json()
    dispatch(postAnswer(data.answer))
}

const initialState = {entries: []}

const answersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ANSWERS:
            newState = {...state}
            newState.entries = action.payload.answers
            return newState;

        case POST_ANSWER:
            newState = {...state}
            newState.entries = [action.payload, ...newState.entries];
            return newState;

        default: return state;
    }
}
export default answersReducer;
