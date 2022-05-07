import React, {useState} from 'react'
import {AddAnswer} from './AddAnswer'
import {Modal} from '../../context/Modal'
import { NavLink, Redirect } from 'react-router-dom'
import styles from './AnswerForm.module.css'

const AddAnswerModal = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => {
        setShowModal(false)
        (<Redirect to='/answers'/>)
    }

    return (
        <>
            <button className={styles.button}>
                <NavLink  onClick={() => setShowModal(true)} to='/answers/new'>Add Answer</NavLink>
            </button>
            {showModal && (
                <Modal className={styles.modal} >
                    <AddAnswer handleClose={handleClose} />
                </Modal>
            )}
        </>
    )
}
export default AddAnswerModal
