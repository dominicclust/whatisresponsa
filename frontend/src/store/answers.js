import { csrfFetch } from "./csrf";


const GET_ANSWERS = 'answers/getAnswers';
const POST_ANSWER = 'answers/postAnswer';
const DELETE_ANSWER = 'answers/deleteAnswer';

const getAnswers = (answers) => {
    return {
        type: GET_ANSWERS,
        answers
    }
}

const postAnswer = (answer) => {
    return {
        type: POST_ANSWER,
        answer
    }
}

const deleteAnswer = (answerId ) => {
    return {
        type: DELETE_ANSWER,
        answerId
    }
}

export const answerFetch = () => async (dispatch) => {
    const response = await csrfFetch('/api/answers')
    const answers = await response.json();
    dispatch(getAnswers(answers))
    return response;
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
        const answer = await response.json()
        dispatch(postAnswer(answer))
        return answer
    }
}

export const answerEditor = (answer) => async(dispatch) => {
    const {id, body} = answer;
    const response = await csrfFetch(`/api/answers/${id}`, {
        method: 'PUT',
        body: JSON.stringify({body})
    })
    if (response.ok) {
        const editedAnswer = await response.json()
        dispatch(postAnswer(editedAnswer))
        return editedAnswer;
    }
}
export const answerDeleter = answerId => async(dispatch) => {
    const res = await csrfFetch(`/api/answers/${answerId}`, {method: 'DELETE'})
    if (res.ok) {
        const answer = await res.json()
        dispatch(deleteAnswer(answer))
        return answer.id
    }
}
const initialState = {entries: []}

const answersReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ANSWERS:
            newState = {...state, entries: [...action.answers]}
            newState.entries[action.answers.id] = action.answers.id
            newState.entries.sort((AnswerA, AnswerB) => AnswerB.id - AnswerA.id)
            return newState;

        case POST_ANSWER:
            let id = action.answer.id
            if (!state.entries[id]) {
                newState = {
                    ...state,
                    entries: [...state.entries]
                }
                newState.entries[id] = action.answer
            }else{
                newState = {...state,
                    entries: [...state.entries,
                            state.entries[id] = action.answer
                    ]
                }
            }
            return newState;
        case DELETE_ANSWER:
            newState = {...state,
                        entries: state.entries.filter((id) => id !== action.answerId)}
            return newState;

        default: return state;
    }
}
export default answersReducer;
