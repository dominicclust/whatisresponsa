import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import AddAnswerModal from '../AddAnswer';
import styles from './Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.sessionState.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <span className={styles.sessionLinks}>
            <ProfileButton user={sessionUser} />
            <AddAnswerModal />
        </span>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
      <nav className={styles.navOn}>
        <NavLink className={styles.link} exact to="/">
          <i className={`fa-solid fa-house-chimney-user ${styles.link}`}></i>
        </NavLink>
        <span className={styles.navSpace}></span>
        {isLoaded && sessionLinks}
      </nav>
    )
}

export default Navigation;
