import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './AnswerForm.module.css'
import * as answerActions from '../../store/answers'

export const AddAnswer = () => {
    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState('')
    const [answer, setAnswer] = useState({})
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = [];
        if (body.length === 0) validationErrors.push("We can't find your question if you don't give us your answer! Type your answer below!")
        const userId = user.id
        if (errors.length === 0 && validationErrors.length === 0) {
            setAnswer({body, userId})
            dispatch(answerActions.addAnswer(answer))
        } else {
            setErrors(validationErrors)
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        if (errors.length === 0)  return <Redirect exact to='/answers' />
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <ul>
                    {errors && errors.map((error, i) => (
                        <li key={i}>{error}</li>)
                    )}
                </ul>
                <div>
                    <label className={styles.label}>
                        What's your answer?
                    </label>
                    <br></br>
                        <textarea
                        className={styles.textarea}
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        />
                </div>
                <br></br>
                <button onClick={handleClick} type='submit'>Submit your answer</button>
            </form>
        </div>
    )
}
