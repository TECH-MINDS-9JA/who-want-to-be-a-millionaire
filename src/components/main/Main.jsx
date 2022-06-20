import React, { useContext }  from 'react'
import { MainContainer, MainWrapper, OptionContainer, Option, Text} from './main.style'
import { Question } from '../../file'
import { ContextContext } from '../../context/Context'
function Main() {
  const { questions } = useContext(ContextContext)
  const handleClick = () => {
      console.log('recorder')
  }
  return (
    <MainContainer>
        <MainWrapper>
          <Question data={questions?.question} />
          <OptionContainer>
          {
            questions?.answers.map((item, i) => (<Option key={i} onClick={handleClick} >
              <Text>{item.text }</Text>
            </Option> ))
          }
          </OptionContainer>
          </MainWrapper>
    </MainContainer>
  )
}

export default Main