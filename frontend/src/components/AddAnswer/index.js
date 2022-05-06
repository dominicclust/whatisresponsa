import React, {useState} from 'react'
import {AddAnswer} from './AddAnswer'
import {Modal} from '../../context/Modal'
import { Link } from 'react-router-dom'
import styles from './AnswerForm.module.css'

const AddAnswerModal = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <button className={styles.button}>
                <Link  onClick={() => setShowModal(true)} to='/answers/new'>Add Answer</Link>
            </button>
            {showModal && (
                <Modal className={styles.modal} onClose={() => setShowModal(false)}>
                    <AddAnswer />
                </Modal>
            )}
        </>
    )
}
export default AddAnswerModal
