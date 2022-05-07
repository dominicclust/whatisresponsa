import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import styles from './AnswerComponent.module.css'
import * as answerActions from '../../store/answers'
export const AnswerContainer = ({answers}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const onDeleteClick = () => {
        const answer = useSelector(state => state.answers.entries.id === answer.id)
        alert('Click OK to confirm you would like to delete this answer.')
        dispatch(answerActions.answerDeleter(answer)).then(<Redirect to='/answers'/>)
    }

    return (
        <div className={styles.answerContainer}>
            {answers && answers.map(answer => {
                return (
                    <div className={styles.answerDiv}>
                        <NavLink to={`/answers/${answer.id}`}>
                            <h2 className={styles.heading}>{answer.body}</h2>
                        </NavLink>
                        <p className={styles.byline}>Posted by {answer.User.username} on {answer.createdAt}</p>
                        {sessionUser.id === answer.userId && (
                            <>
                                <button className={styles.button} >Edit</button>
                                <button onClick={onDeleteClick} className={styles.button} >Delete</button>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
