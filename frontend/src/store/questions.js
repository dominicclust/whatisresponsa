import { csrfFetch } from "./csrf"
import { useParams } from "react-router-dom"

const GET_QUESTIONS = '/questions/getQuestions'

const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        payload: questions
    }
}


const initialState = {entries: []}

const questionsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_QUESTIONS:
            newState = {...state};
            newState.entries = action.payload.questions
            return newState;
        default:
            return state;
    }
}
