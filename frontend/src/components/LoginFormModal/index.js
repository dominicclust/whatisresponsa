import React, { useState } from 'react'
import LoginForm from "./LoginForm";
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css'

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false)

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
