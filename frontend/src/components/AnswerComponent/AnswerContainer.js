import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, NavLink } from 'react-router-dom';
import styles from './AnswerComponent.module.css'
import * as answerActions from '../../store/answers'

export const AnswerContainer = () => {
    const [userButtons, setUserButtons] = useState(false)
    const sessionUser = useSelector(state => state.sessionState.user);
    const answers = useSelector(state => state.answerState.entries)
    const answerArray = Object.values(answers)

    const dispatch = useDispatch()


    const onDeleteClick = (e) => {
        e.preventDefault();

    }



    return (
        <div className={styles.answerContainer}>
            {answers && answerArray.map(answer => {
                const {answerId, body, userId, createdAt} = answer;
                return (
                    <div className={styles.answerDiv}>
                    <NavLink key={answerId} to={`/answers/${answerId}`}>
                        <h2 className={styles.heading}>{answer.body}</h2>
                    </NavLink>
                        <span>
                            {sessionUser.id === userId
                                ?   <>
                                        <button className={styles.button} >Edit</button>
                                        <button onClick={() => onDeleteClick()} className={styles.button} >Delete</button>
                                    </>
                                :   <></>
                            }
                            <p>Posted by {answer.User.username} on {answer.createdAt.toDateString()}</p>
                        </span>
                    </div>
                )
                        })}

        </div>
    )
}
