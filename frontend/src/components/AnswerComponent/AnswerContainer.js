import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect, Prompt, Switch, Route } from 'react-router-dom';
import styles from './AnswerComponent.module.css'
import * as answerActions from '../../store/answers'
export const AnswerContainer = () => {
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.sessionState.user)
    const answers = useSelector(state => state.answerState.entries)

    const onDeleteClick = (id) => {
        return (<Prompt
            message="Think of the potential questions you could be abandoning! Click OK to remove your answer from existence."
            when={
                true
                ?   () => dispatch(answerActions.answerDeleter(id)).then((<Redirect to='/answers'/>))
                :   (<Redirect to='/answers' />)
            }
        />)
    }

    return (
        <div className={styles.answerContainer}>
                {(sessionUser && answers) && (answers.map(answer => {

                    return (
                        <>
                            <div className={styles.answerDiv} key={answer.id}>
                                <NavLink to={`/answers/${answer.id}`}>
                                    <h2 className={styles.heading}>{answer.body}</h2>
                                </NavLink>
                                <>
                                    {sessionUser === answer.userId
                                        ?   (<>
                                                <button className={styles.button} >Edit</button>
                                                <button onClick={onDeleteClick(answer.id)} className={styles.button} >Delete</button>
                                            </>)
                                        :   (<></>)
                                    }
                                </>
                            </div>
                        </>
                    )
                }))}
            </div>
    )
}
