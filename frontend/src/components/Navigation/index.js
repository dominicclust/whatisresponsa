import React, {useState, useEffect} from 'react'
import ProfileButton from './ProfileButton'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormPage'
import AddAnswerModal from '../AddAnswer'
import styles from './Navigation.module.css'

function Navigation({ isLoaded }) {
    const user = useSelector(state => state.sessionState.user)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        if (!user) setShowModal(true)
    })

    let sessionLinks;
    if (user) {
        sessionLinks = (
        <>
            <span>
                <ProfileButton user={user} />
                <AddAnswerModal user={user} />
            </span>
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
        user
            ?   <nav className={styles.navOn}>
                    <NavLink className={styles.link} to='/answers'>
                        <i id={styles.i} className='fa-solid fa-house'></i>
                    </NavLink>
                    <span className={styles.navSpace}></span>
                    {isLoaded && sessionLinks}
                </nav>
            : <nav className={styles.navOff}>{showModal && sessionLinks}</nav>
    )
}
export default Navigation;
