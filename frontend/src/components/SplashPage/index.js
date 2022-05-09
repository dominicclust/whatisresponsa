import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch, Route} from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";

const SplashPage = () => {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.sessionState.user)

    if (user) {
        return (<Redirect to='/answers' />)
    } else setShowModal(true)

    let splash;
    if (showModal) {
        splash = (
            <>
                    <LoginFormModal />
                    <SignupFormModal />
            </>
        )
    }


    return (
        <>
            {splash}
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
}
export default SplashPage;
