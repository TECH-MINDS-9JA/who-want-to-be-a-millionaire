import React, { useContext }  from 'react'
import { MainContainer, MainWrapper, OptionContainer} from './main.style'
import { Question, Option } from '../../file'
import { ContextContext } from '../../context/Context'
function Main() {
  const { questions } = useContext(ContextContext)
  return (
    <MainContainer>
        <MainWrapper>
          <Question data={questions?.question} />
          <OptionContainer>
          {questions?.answers.map((item, i) => <Option key={i} data={item} />)}
          </OptionContainer>
          </MainWrapper>
    </MainContainer>
  )
}

export default Main