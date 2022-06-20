
import React, { useState, useEffect, createContext } from 'react'
import { question } from '../file'

export const ContextContext = createContext()

export const ContextProvider = ({ children }) => {
    const [questionNum, setQuestionNum] = useState(5)
    const [questions, setQuestions] = useState(null)
    const [time, setTime ] = useState(false)

    useEffect(() => {
            setQuestions(question[questionNum - 1])
    },[questionNum, question])
    return <ContextContext.Provider
        value={{
            questionNum, setQuestionNum,
            questions, setQuestions,
            time,setTime
    }}>
        {children }
    </ContextContext.Provider>
}