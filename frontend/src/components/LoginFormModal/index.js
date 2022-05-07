import React, { useEffect, useState } from 'react'
import LoginForm from "./LoginForm";
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css'
import { useSelector } from 'react-redux';


const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false)
    const user = useSelector( state=> state.session.user)
    useEffect(() => {
        if (!user) setShowModal(true)
    }, [user])
    return (
        <>
            <NavLink onClick={()  => setShowModal(true)} className={styles.sessionLinks} to='/login'>Log In</NavLink>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;
