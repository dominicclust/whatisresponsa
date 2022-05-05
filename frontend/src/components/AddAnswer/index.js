import React, {useState} from 'react'
import {AddAnswer} from './AddAnswer'

const AddAnswerModal = () => {
    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <NavLink onClick={()  => setShowModal(true)} className={styles.sessionLinks} to='/answers/new'>Add Answer</NavLink>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddAnswer />
                </Modal>
            )}
        </>
    )
}
export default AddAnswerModal
