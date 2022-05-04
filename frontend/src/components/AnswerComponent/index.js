import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { answerFetch } from '../../store/answer';
import { SingleAnswer } from './SingleAnswer'
import styles from './AnswerComponent.module.css'

const Answers = () => {
    const answers = useSelector(state => state.answers.entries)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(answerFetch())
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
export default Answers
