import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { answerFetch } from '../../store/answers';
import { SingleAnswer } from './SingleAnswer'
import styles from './AnswerComponent.module.css'

export const AnswerContainer = () => {
    const answers = useSelector(state => state.answers.entries)
    const dispatch = useDispatch()

    useEffect(async ()=>{
        await dispatch(answerFetch())
    }, [dispatch])

    return (
        <div className={styles.answerContainer}>
            {answers.map((answer) => {
                return (
                    <div>
                        <SingleAnswer answer={answer}/>
                    </div>
                )
            })}
        </div>
    )
}
