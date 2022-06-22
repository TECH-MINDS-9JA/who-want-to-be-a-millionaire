import React, { useContext } from 'react'
import { CounterContainer, Num } from './counter.style'
import { ContextContext } from '../../context/Context'
function Counter() {
  const { timer } = useContext(ContextContext)

  return (
    <CounterContainer>
      <Num>{ timer }</Num>
    </CounterContainer>
  )
}

export default Counter