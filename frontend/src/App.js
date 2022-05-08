import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from './store/session'
import * as answerActions from './store/answers'
import Navigation from './components/Navigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import SplashPage from './components/SplashPage'
import LoginFormModal from './components/LoginFormModal';
import SignupFormModal from './components/SignupFormPage';
import AddAnswerModal from './components/AddAnswer';
import { AnswerContainer } from './components/AnswerComponent/AnswerContainer';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.sessionState.user)
  const answers = useSelector(state => state.answerState.entries)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  useEffect(() => {
    if (user) return dispatch(answerActions.answerFetch())
  }, [user])


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path='/login'>
          <LoginFormModal/>
        </Route>
        <Route path='/signup'>
          <SignupFormModal />
        </Route>
        <Route exact path='/'>
          <SplashPage />
        </Route>
        <Route path='/answers'>
          <AnswerContainer />
        </Route>
        <Route path='/answers/new'>
          <AddAnswerModal />
        </Route>
      </Switch>
    </>
  );
};

export default App;
