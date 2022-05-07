import React from 'react'
import ProfileButton from './ProfileButton'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormPage'
import AddAnswerModal from '../AddAnswer'
import styles from './Navigation.module.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <>
            <span>
                <ProfileButton id={styles.i} user={sessionUser} />
            </span>
            <NavLink to='/answers/new' classname={styles.addAnswer}>
                <AddAnswerModal />
            </NavLink>
        </>
        )
    } else sessionLinks = (
        <>
            <NavLink to='/login'>
                <LoginFormModal className={styles.sessionLinks}>Log In</LoginFormModal>
            </NavLink>
            <NavLink to='/signup'>
                <SignupFormModal className={styles.sessionLinks}>Sign Up</SignupFormModal>
            </NavLink>
        </>
    )
    return (
        sessionUser
            ?   <nav className={styles.navOn}>
                    <NavLink className={styles.link} to='/answers'>
                        <i id={styles.i} className='fa-solid fa-house'></i>
                    </NavLink>
                    <span className={styles.navSpace}></span>
                    {isLoaded && sessionLinks}
                </nav>
            : <nav className={styles.navOff}>{sessionLinks}</nav>
    )
}
export default Navigation;
