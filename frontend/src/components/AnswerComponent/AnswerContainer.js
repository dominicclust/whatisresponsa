import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as answerActions from '../../store/answers';
import { Link } from 'react-router-dom';
import { SingleAnswer } from '../SingleAnswer';
import styles from './AnswerComponent.module.css'

export const AnswerContainer = () => {

    const answers = useSelector(state => state.answers.entries)
    const dispatch = useDispatch()
    console.log(answers)
    // useEffect(()=>{
    //     dispatch(answerActions.answerFetch(answers))
    // }, [dispatch])
    
    return (
        <div className={styles.answerContainer}>
            {answers && answers.map(answer => {
                return (
                    <Link to={`/answers/${answer.id}`} >
                        <SingleAnswer answer={answer}/>
                    </Link>
                )
            })}
        </div>
    )
}
