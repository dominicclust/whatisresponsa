import { csrfFetch } from "./csrf"

const GET_QUESTIONS = '/questions/getQuestions'
const POST_QUESTION = '/questions/postQuestion'

const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

const postQuestion = (question) => {
    return {
        type: POST_QUESTION,
        question
    }
}

export const questionFetch = () => async(dispatch) => {
    const response = await csrfFetch('/api/questions')
    const questions = await response.json();
    dispatch(getQuestions(questions))
    return response
}

export const addQuestion = (question) => async(dispatch) => {
    const {body, answerId, userId} = question;
    const response = await csrfFetch('/api/questions', {
        method: 'POST',
        body: JSON.stringify({body, answerId, userId})
    })
}

const initialState = {entries: []}

const questionsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_QUESTIONS:
            newState = {...state};
            newState.entries[action.questions.id] = action.payload.questions.id
            return newState;
        case POST_QUESTION:
            let id = action.question.id
            if (!state.entries[id]) {
                newState = {...state, entries: [...state.entries]};
                newState.entries[id] = action.question
            } else {
                newState = {...state, entries: [...state.entries, state.entries[id] = action.question]}
            }
            return newState
        default:
            return state;
    }
}
export default questionsReducer
