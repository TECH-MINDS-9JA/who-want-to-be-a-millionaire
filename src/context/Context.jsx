
import React, { useState, useEffect, createContext } from 'react'
import { question } from '../file'

export const ContextContext = createContext()

export const ContextProvider = ({ children }) => {
    const [questionNum, setQuestionNum] = useState(5)
    const [questions, setQuestions] = useState(null)
    const [time, setTime ] = useState(false)
    const [selected, setSelected] = useState(null)
    const [className, setClassName] = useState(null)
    const [lastQuestion, setLastQuestion] = useState(false)
    const [dollars, setDollars] = useState(`$ 0`)
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    }
    const optionClick = (a) => {
        setSelected(a)
        setClassName("active")
        delay(3000, () => setClassName(a.correct ? "correct" : "wrong"))
        delay(6000, () => {
            if (a.correct) {
                setQuestionNum((prev) => prev + 1)
                setSelected(null)
            } else {
                setTime(true)
            }
        } )
        
}
    useEffect(() => {
            setQuestions(question[questionNum - 1])
    }, [questionNum, question])
    
    useEffect(() => {
        
    },[questionNum])
    return <ContextContext.Provider
        value={{
            questionNum, setQuestionNum,
            questions, setQuestions,
            time, setTime,
            selected, setSelected,
            className, setClassName,
            optionClick,
            dollars, setDollars
    }}>
        {children }
    </ContextContext.Provider>
}