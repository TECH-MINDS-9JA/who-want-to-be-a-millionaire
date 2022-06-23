
import React, { useState, useEffect, createContext } from 'react'
import { question, MoneyData,startPlay, correct,wrong} from '../file'
import useSound from 'use-sound'

export const ContextContext = createContext()

export const ContextProvider = ({ children }) => {
    const [questionNum, setQuestionNum] = useState(1)
    const [questions, setQuestions] = useState(null)
    const [time, setTime ] = useState(false)
    const [selected, setSelected] = useState(null)
    const [className, setClassName] = useState(null)
    const [user, setUser ] = useState(null)
    const [dollars, setDollars] = useState(0)
    const [timer, setTimer] = useState(30)
    const [playSound] = useSound(startPlay)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)
    //         useEffect(() => {
    //     playSound()
    // },[playSound])
    if (user) {
             playSound() 
    }
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    }
    const optionClick = (a) => {
        setSelected(a)
        setClassName("active")
        delay(3000, () => setClassName(a.correct ? "correct" : "wrong"))
        delay(5000, () => {
            if (a.correct) {
                correctAnswer();
                delay(1000, () => {
                        setQuestionNum((prev) => prev + 1)
                        setSelected(null)
                })
            } else {
                      wrongAnswer()
                delay(1000, () => {
                         setTime(true)
                })
            }
        } )
}
    useEffect(() => {
            setQuestions(question[questionNum - 1])
    }, [questionNum, question])
    
    useEffect(() => {
            questionNum > 1 && setDollars(MoneyData.find((m) => m.id === questionNum - 1).cash)
    }, [questionNum])
    useEffect(() => {
        if (timer === 0) return  setTime(true);
        const interval = setInterval(() => {
                setTimer(prev => prev - 1)
        }, 1000)
    return () => clearInterval(interval)
    }, [timer, setTime])

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
            timer, setTimer,
            user, setUser
    }}>
        {children }
    </ContextContext.Provider>
}