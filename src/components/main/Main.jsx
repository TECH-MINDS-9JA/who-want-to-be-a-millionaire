import React from 'react'
import { MainContainer, MainWrapper, OptionContainer} from './main.style'
import {Question, Option  } from '../../file'
const select = [1,2,3,4]
function Main() {
  return (
    <MainContainer>
      <MainWrapper>
        <Question />
        <OptionContainer>
          {select.map((item) => <Option key={item }/>)}
        </OptionContainer>
    </MainWrapper>
    </MainContainer>
  )
}

export default Main