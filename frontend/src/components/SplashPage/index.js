import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink, Redirect, Switch, Route} from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import { AnswerContainer } from "../AnswerComponent/AnswerContainer";
import SignupFormModal from "../SignupFormPage";
import { Modal } from "../../context/Modal";

const SplashPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [path, setPath] = useState()
    const user = useSelector(state => state.sessionState.user)

    if (!user) {
        setShowModal(true);
        return (<Redirect to='/login' />)
    } else {
        return (
            <Redirect to='/answers' />
        )
    }
    let splash;
    if (showModal) {
        splash = (
            <>
                <Modal>

                </Modal>
                    <Switch>
                        <Route path='/login'>
                            <LoginFormModal />
                        </Route>
                        <Route path='/signup'>
                            <SignupFormModal />
                        </Route>
                    </Switch>
            </>
        )
    } else {
        splash = (
            <div>
                <AnswerContainer />
            </div>
        )
    }

    return (
        <>
            {splash}
        </>
    )
}
export default SplashPage;
