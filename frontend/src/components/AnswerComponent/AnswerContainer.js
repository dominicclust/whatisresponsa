import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, NavLink, useParams} from 'react-router-dom';
import styles from './AnswerComponent.module.css'
import * as answerActions from '../../store/answers'

export const AnswerContainer = ({isLoaded}) => {
    const { answerId } = useParams()
    const sessionUser = useSelector(state => state.sessionState.user)
    const answers = useSelector(state => {
        return state.answerState.entries.map(answerId => state.answerState[answerId])
    })

    const dispatch = useDispatch()
    const onDeleteClick = (id) => {
        return dispatch(answerActions.answerDeleter(answers[id]))
    }
    let userButtons;
    sessionUser.id === answers[answerId].userId
        ? userButtons = (
        <>
            <button className={styles.button} >Edit</button>
            <button onClick={() => onDeleteClick()} className={styles.button} >Delete</button>
        </>
        )
        :  userButtons = null;



    return (
        isLoaded
        ? <div className={styles.answerContainer}>
            {answers && answers.map(answer => {
                return (
                <>
                    <div className={styles.answerDiv}>
                    <NavLink key={answer.id} to={`/answers/${answer.id}`}>
                        <h2 className={styles.heading}>{answer.body}</h2>
                    </NavLink>
                        <span>
                            {userButtons}
                            <p>Posted by {answer.User.username} on {answer.createdAt.toDateString()}</p>
                        </span>
                    </div>
                </>
                )
            })}
        </div>
        : (<Redirect to='/' />)
    )
}
