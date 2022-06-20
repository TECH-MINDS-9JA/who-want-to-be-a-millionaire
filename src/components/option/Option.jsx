import React, { useContext } from 'react'
import './option.css'
import { OptionContainer, Text } from './option.style'
import { ContextContext } from '../../context/Context'
function Option({ data }) {
  const { text} = data 
  const { selected, className, optionClick } = useContext(ContextContext)
  console.log(className)

  return (
      <OptionContainer className={selected === data.correct ? className  : null } onClick={() => optionClick(data)}>
      <Text>{ text}</Text>
      </OptionContainer>
  )
}

export default Option