import React, {useState} from 'react'
import {AddAnswer} from './AddAnswer'
import {Modal} from '../../context/Modal'
import { NavLink, Redirect } from 'react-router-dom'
import styles from './AnswerForm.module.css'

const AddAnswerModal = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <NavLink  onClick={() => setShowModal(true)} to='/answers/new'>Add Answer</NavLink>
            {showModal && (
                <Modal className={styles.modal} onClose={() => setShowModal(false)} >
                    <AddAnswer onClose={() => setShowModal(false)}/>
                </Modal>
            )}
        </>
    )
}
export default AddAnswerModal
