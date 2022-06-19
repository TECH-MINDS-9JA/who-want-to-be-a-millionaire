import React,{ useState, useEffect } from 'react'
import { MainContainer, MainWrapper, OptionContainer} from './main.style'
import {Question, Option,question  } from '../../file'
const select = [1,2,3,4]
function Main() {
  const [timeOut, setTimeOut] = useState(false)
  const [questionNum, setQuestionNum] = useState(1)
  const [questions, setQuestion] = useState(null)
  useEffect(() => {
    setQuestionNum(question[questionNum -1])
  },[questionNum, question])
  return (
    <MainContainer>
      {
        questions?.map((data) => (
        <MainWrapper key={data.id}>
          <Question data={data.question} />
          <OptionContainer>
              {data?.answers.map((item) => <Option key={item} data={ item}/>)}
          </OptionContainer>
          </MainWrapper>
        ))
      }
    </MainContainer>
  )
}

export default Main