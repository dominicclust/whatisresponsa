import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session'
import styles from './ProfileButton.module.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };

    useEffect(() => {
      if (!showMenu) return;
      const closeMenu = () => {
        setShowMenu(false);
      };
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    // useEffect(() => {
    //   const hover = (e) => {

    //   }
    // })
    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout())
      return (<Redirect exact to='/' />)
    };

    return (
      <>
        <button onClick={openMenu} >
          <i className={`fas fa-id-badge ${styles.i}`}  />
        </button>
        {showMenu && (
          <ul className={styles.profileDrop}>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout} className={styles.button}>Log Out</button>
            </li>
          </ul>
        )}
      </>
    );
  }



export default ProfileButton;
