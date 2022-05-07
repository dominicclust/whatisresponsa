import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import { AnswerContainer } from "../AnswerComponent/AnswerContainer";
import SignupFormModal from "../SignupFormPage";
import { Modal } from "../../context/Modal";

const SplashPageModal = () => {
    const [showModal, setShowModal] = useState(true);
    const sessionUser = useSelector(state => state.session.user)
    useEffect(() => {
        if (sessionUser) {
            setShowModal(false)
        }
    }, [sessionUser])

    return (
        showModal
            ? (
                <Modal>
                    <LoginFormModal />
                    <SignupFormModal />
                </Modal>
            )

            : (<AnswerContainer />)
    )
}
export default SplashPageModal
