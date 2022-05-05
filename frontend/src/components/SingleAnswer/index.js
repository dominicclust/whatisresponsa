import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './AnswerComponent.module.css'
import { useDispatch, useSelector } from 'react-redux'
import * as answerActions from '../../store/answers'

export const SingleAnswer = ({answer}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const currentAnswer = useSelector(state => state.answers.entries.id === id)
    const sessionUser = useSelector(state => state.session.user)
    const onDeleteClick = () => {
        dispatch(answerActions.answerDestroyer(currentAnswer))
    }
    return (
        <div className={styles.answerDiv}>
            <h2>{answer.body}</h2>
            <p>Posted by {answer.User.username} on {answer.createdAt}</p>
            {sessionUser.id === answer.userId && (
                <>
                    <button>Edit</button>
                    <button onClick={onDeleteClick}>Delete</button>
                </>
            )
            }
        </div>
    )
}
