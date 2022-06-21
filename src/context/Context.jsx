
import React, { useState, useEffect, createContext } from 'react'
import { question, MoneyData } from '../file'

export const ContextContext = createContext()

export const ContextProvider = ({ children }) => {
    const [questionNum, setQuestionNum] = useState(1)
    const [questions, setQuestions] = useState(null)
    const [time, setTime ] = useState(false)
    const [selected, setSelected] = useState(null)
    const [className, setClassName] = useState(null)
    const [lastQuestion, setLastQuestion] = useState(false)
    const [dollars, setDollars] = useState()
    const [timer, setTimer] = useState(30)
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
            questionNum > 1 && setDollars(MoneyData.find((m) => m.id === questionNum - 1).cash)
    }, [questionNum, MoneyData])
    useEffect(() => {
        // if (timer === 1) return setTime(true);
        const interval = setInterval(() => {
                setTimer(prev => prev - 1)
        }, 1000)
           if (timer === 1) return setTime(true);
    return () => clearInterval(interval)
    }, [time, setTime])

         useEffect(() => {
            setTimer(30)
        },[questionNum])
    return <ContextContext.Provider
        value={{
            questionNum, setQuestionNum,
            questions, setQuestions,
            time, setTime,
            selected, setSelected,
            className, setClassName,
            optionClick,
            dollars, setDollars,
            timer, setTimer
    }}>
        {children }
    </ContextContext.Provider>
}