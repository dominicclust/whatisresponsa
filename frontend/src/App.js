import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from './store/session'
import Navigation from './components/Navigation'

function App() {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true))
    }
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
    </>
  );
};

export default App;
