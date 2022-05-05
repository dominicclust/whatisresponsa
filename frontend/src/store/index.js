import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import answersReducer from './answers'
import questionsReducer from './questions'

const rootReducer = combineReducers({
    session: sessionReducer,
    answers: answersReducer,
    questions: questionsReducer,
})

//will be set to different store enhancers depending on environment
let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk)
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;
