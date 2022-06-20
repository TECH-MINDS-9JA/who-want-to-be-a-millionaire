
import React, { useState, useEffect, createContext } from 'react'
import { question } from '../file'

export const ContextContext = createContext()

export const ContextProvider = ({ children }) => {
    const [questionNum, setQuestionNum] = useState(5)
    const [questions, setQuestions] = useState(null)
    const [time, setTime ] = useState(false)
    const [selected, setSelected] = useState(null)
    const [className, setClassName] = useState(null)
    const optionClick = (a) => {
        setSelected(a)
        setClassName("active")
     setTimeout(() => {
            setClassName(a.correct ? "correct" : "wrong")
        }, 3000)
}
    useEffect(() => {
            setQuestions(question[questionNum - 1])
    },[questionNum, question])
    return <ContextContext.Provider
        value={{
            questionNum, setQuestionNum,
            questions, setQuestions,
            time, setTime,
            selected, setSelected,
            className, setClassName,
            optionClick
    }}>
        {children }
    </ContextContext.Provider>
}