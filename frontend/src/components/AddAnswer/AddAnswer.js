import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './AnswerForm.module.css'
import * as answerActions from '../../store/answers'

export const AddAnswer = () => {
    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState('')
    const [answer, setAnswer] = useState({})
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        const validationErrors = [];
        if (body.length === 0) validationErrors.push("We can't find your question if you don't give us your answer! Type your answer below!")
        setErrors(validationErrors)
    }, [body])

    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = user.id
        if (errors.length === 0) {
            setAnswer({body, userId})
            dispatch(answerActions.addAnswer(answer))
        }
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, i) => (
                        <li key={i}>{error}</li>)
                    )}
                </ul>
                <div>
                    <label className={styles.label}>
                        What's your answer?
                    </label>
                        <textarea
                        className={styles.textarea}
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        />
                </div>
            </form>
        </div>
    )
}
