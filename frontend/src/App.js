import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import * as sessionActions from './store/session'
import Navigation from './components/Navigation'
import { Route, Switch } from 'react-router-dom'
import LoginFormModal from './components/LoginFormModal';
import SignupFormModal from './components/SignupFormPage';
import { AnswerContainer } from './components/AnswerComponent/AnswerContainer';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true))
  }, [dispatch])

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
        <Route path='/answers'>
          <AnswerContainer />
        </Route>
      </Switch>

    </>
  );
};

export default App;
