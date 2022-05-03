import React from 'react'
import ProfileButton from './ProfileButton'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormPage'
import styles from './Navigation.module.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        )
    } else sessionLinks = (
        <>
            <span>
                <LoginFormModal className={styles.sessionLinks}>Log In</LoginFormModal>
            </span>
            <span>
                <SignupFormModal className={styles.sessionLinks}>Sign Up</SignupFormModal>
            </span>
        </>
    )
    return (
        <nav className={styles.nav}>
            <span>
                <NavLink className={styles.link} exact to='/'>Home</NavLink>
            </span>
            {isLoaded && sessionLinks}
        </nav>
    )
}
export default Navigation;
