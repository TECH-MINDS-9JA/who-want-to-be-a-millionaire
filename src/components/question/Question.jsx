import React from 'react'
import { QuestionContainer, Text } from './question.style'
function Question({data}) {
  return (
      <QuestionContainer>
      <Text>{ data}</Text>
      </QuestionContainer>
  )
}
 
export default Question