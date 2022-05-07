import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleAnswer = () => {
    const {id} = useParams()
    const answer = useSelector(state => state.answers.entries.find(id => id === state.answers.entries.id))
    return(
        {answer}
    )
}
export default SingleAnswer
