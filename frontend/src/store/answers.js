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
        const data = await response.json()
        dispatch(postAnswer(data.answer))
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
export const answerDeleter = (answerId) => async(dispatch) => {
    const response = await csrfFetch(`/api/answers/${answerId}`,{
        method: 'DELETE'
    })
    dispatch(deleteAnswer())
    return response
}


const sortEntries = (entries) => {
    return entries.sort((answerA, answerB) => {
        return answerB.id - answerA.id
    })
}

const initialState = {entries: []}
const answersReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ANSWERS:
            newState = {...state};
            action.answers.sort((answerA, answerB) => answerB.id - answerA.id)
                .map(answer => newState[answer.id] = answer)
            return newState;

        case POST_ANSWER:
            if (!state[action.answer.id]) {
                newState = {
                    ...state,
                    [action.answer.id]: action.answer
                }
                const answerList = newState.entries.map(id => newState[id])
                answerList.push(action.answer)
                newState.entries = sortEntries(answerList)
                return newState
            } else {
                newState = {
                    ...state,
                    [action.answer.id]: {
                        ...state[action.answer.id],
                        ...action.answer
                    }
                }
                return newState;
            }
        case DELETE_ANSWER:
            newState = {...state,
                        entries: state.entries.filter(answer => answer.id !== action.answerId)}
            return newState;

        default: return state;
    }
}
export default answersReducer;
