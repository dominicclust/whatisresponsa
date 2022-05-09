import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './AnswerForm.module.css'
import * as answerActions from '../../store/answers'

export const AddAnswer = ({onClose}) => {
    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.sessionState.user)


    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        const validationErrors = [];
        if (body.length === 0) validationErrors.push("We can't find your question if you don't give us your answer! Type your answer below!")
        setErrors(validationErrors)
        return dispatch(answerActions.addAnswer({body, userId: user.id}))
            .catch(async(res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }


    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <ul>
                    {errors.length > 0 && errors.map((error, i) => (
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
                    <br></br>
                    <span className={styles.buttonSpan}>
                        <button className={styles.formButton} type='submit'>Submit your answer</button>
                        <button onClick={onClose} className={styles.formButton}>Cancel</button>
                    </span>
                </div>
            </form>
        </div>
    )
}
