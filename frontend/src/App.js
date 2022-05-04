import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from './store/session'
import Navigation from './components/Navigation'
import SplashPage from './components/SplashPage';
function App() {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true))
  }, [dispatch])

  return (

    <>
      <SplashPage user={user}/>
      <Navigation isLoaded={isLoaded} />
    </>
  );
};

export default App;
