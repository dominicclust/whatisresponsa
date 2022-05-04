import { Link } from "react-router-dom"
import styles from './AnswerComponent.module.css'

export const SingleAnswer = ({answer}) => {
    const {id, body, createdAt} = answer
    const username = answer.User.username
    return (
        <div className={styles.answerDiv}>
            <Link to={`/answers/${id}`}>
                <h2>{body}</h2>
            </Link>
            <p>Posted by {username} on {createdAt}</p>
        </div>
    )
}
