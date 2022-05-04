import React from 'react';
import { Modal } from '../../context/Modal'
// import { Route, Switch} from 'react-router-dom';
// import { SingleAnswer } from '../AnswerComponent/SingleAnswer';
import LoginForm from '../LoginFormModal/LoginForm';

import { AnswerContainer } from '../AnswerComponent/AnswerContainer'

const SplashPage = ({user}) => {
    const NotLoggedIn = (
        <div>
            <Modal>
                <LoginForm />
            </Modal>
        </div>
    )
    const LoggedIn = (
        <div>
            <AnswerContainer user={user}/>
        </div>
    )

    if (user) {
        return (
            <LoggedIn />
        )
    } else {
        return (
            <NotLoggedIn />
        )
    }
}
export default SplashPage
