import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { answerFetch } from '../../store/answers';
import { NavLink } from 'react-router-dom';
// import { SingleAnswer } from './SingleAnswer'
import styles from './AnswerComponent.module.css'

export const AnswerContainer = () => {

    const answers = useSelector(state => state.answers.entries)
    const dispatch = useDispatch()
    console.log('-------------',answers[0])
    useEffect(()=>{
        dispatch(answerFetch(...answers))
    }, [dispatch])

    return (
        <div className={styles.answerContainer}>
            {answers.map((answer) => {
                return (
                    <div className={styles.answerDiv}>
                        <NavLink className={styles.navLink} to={`/answers/${answer.id}`}>
                            <h2 className={styles.heading}>{answer.body}</h2>
                        </NavLink>
                        <p>Posted by {answer.User.username} on {answer.createdAt}</p>
                    </div>
                )
            })}
        </div>
    )
}
