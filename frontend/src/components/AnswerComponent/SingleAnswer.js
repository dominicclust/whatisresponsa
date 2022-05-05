import React from "react"
import { NavLink } from "react-router-dom"
import styles from './AnswerComponent.module.css'

export const SingleAnswer = ({answer}) => {
    const {id, body, userId, createdAt} = answer

    return (
        <div className={styles.answerDiv}>
            <NavLink to={`/answers/${id}`}>
                <h2>{body}</h2>
            </NavLink>
            <p>Posted by {userId} on {createdAt}</p>
        </div>
    )
}
