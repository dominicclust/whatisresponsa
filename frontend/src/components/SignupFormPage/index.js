import React, { useState } from 'react'
import SignupForm from "./SignupForm";
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css'

const SignupFormModal = () => {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <>
            <NavLink onClick={()  => setShowModal(true)} className={styles.sessionLinks} to='/signup'>Sign up</NavLink>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}

export default SignupFormModal;
