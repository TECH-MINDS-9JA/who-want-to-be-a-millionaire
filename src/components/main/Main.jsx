import React,{ useContext }  from 'react'
import { MainContainer, MainWrapper, OptionContainer, Option, Text} from './main.style'
import { Question } from '../../file'
import { ContextContext } from '../../context/Context'
import './main.css'
function Main() {
  const { questions, optionClick, selected, className } = useContext(ContextContext)
  return (
    <MainContainer>
        <MainWrapper>
          <Question data={questions?.question} />
          <OptionContainer>
          {
            questions?.answers.map((item, i) => (
              <Option key={i} onClick={() => optionClick(item)} className={ selected === item ? className : null} >
              <Text>{item.text }</Text>
              </Option>
            ))
          }
          </OptionContainer>
          </MainWrapper>
    </MainContainer>
  )
}

export default Main