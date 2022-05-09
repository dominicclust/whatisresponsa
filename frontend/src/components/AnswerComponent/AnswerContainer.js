import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, NavLink } from 'react-router-dom';
import styles from './AnswerComponent.module.css'
import * as answerActions from '../../store/answers'

export function AnswerContainer () {
    const [userButtons, setUserButtons] = useState(false)
    const sessionUser = useSelector(state => state.sessionState.user);
    const answers = useSelector(state => state.answerState.entries)
    const dispatch = useDispatch()
    console.log(answers)

    const onDeleteClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.answerContainer}>
            {answers && answers.map(answer => {
                const {answerId, body, userId, createdAt} = answer;
                return (
                    <div className={styles.answerDiv}>
                    <NavLink key={answerId} to={`/answers/${answerId}`}>
                        <h2 className={styles.heading}>{body}</h2>
                    </NavLink>
                        <span>
                            {sessionUser.id === userId
                                ?   <>
                                        <button className={styles.button} >Edit</button>
                                        <button onClick={() => onDeleteClick()} className={styles.button} >Delete</button>
                                    </>
                                :   <></>
                            }
                            <p>Posted by {answer.User.username} on {createdAt.toDateString()}</p>
                        </span>
                    </div>
                )
                        })}

        </div>
    )
}
