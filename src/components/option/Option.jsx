import React from 'react'
import './option.css'
import { OptionContainer, Text } from './option.style'
function Option({ data }) {
  const { text, correct  } = data 
  return (
      <OptionContainer className='answer active'>
      <Text>{ text}</Text>
      </OptionContainer>
  )
}

export default Option