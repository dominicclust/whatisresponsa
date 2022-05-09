import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch, Route} from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";
import styles from './SplashPage.module.css'

const SplashPage = () => {
    const user = useSelector(state => state.sessionState.user)

    let splash;
    if (!user) {
        splash = (
            <div className={styles.background} >
                    <LoginFormModal />
                    <SignupFormModal />
            </div>
        )
    } else {
        splash = (<Redirect to='/answers' />)
    }


    return (
        <div className={styles.inset}>
            {splash}
            <Switch>
                <Route path='/login'>
                    <LoginFormModal />
                </Route>
                <Route path='/signup'>
                    <SignupFormModal />
                </Route>
            </Switch>
        </div>
    )
}
export default SplashPage;
