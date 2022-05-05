import React, {useState} from 'react'
import {AddAnswer} from './AddAnswer'
import {Modal} from '../../context/Modal'
import { Link } from 'react-router-dom'
import styles from './AnswerForm.module.css'

const AddAnswerModal = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <Link  onClick={()  => setShowModal(true)} className={styles.modal} to='/answers/new'>Add Answer</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddAnswer />
                </Modal>
            )}
        </>
    )
}
export default AddAnswerModal
