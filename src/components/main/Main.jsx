import React, { useContext }  from 'react'
import { MainContainer, MainWrapper, OptionContainer} from './main.style'
import { Question, Option } from '../../file'
import { ContextContext } from '../../context/Context'
const select = [1,2,3,4]
function Main() {
  const { questions } = useContext(ContextContext)
  return (
    <MainContainer>
        <MainWrapper>
          <Question data={questions?.question} />
          <OptionContainer>
              {questions?.answers.map((item) => <Option key={item} data={ item}/>)}
          </OptionContainer>
          </MainWrapper>
    </MainContainer>
  )
}

export default Main