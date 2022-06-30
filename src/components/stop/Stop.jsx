import React,{ useContext } from 'react'
import { StopContainer, StopWrapper, Header, Money,Back } from './stop.style'
import { ContextContext } from '../../context/Context'
import { wrongImg } from '../../file'
function Stop() {
  const { dollars, handleRefresh } = useContext(ContextContext)
  return (
    <StopContainer stop={wrongImg}>
      <StopWrapper>
        <Header>that's incorrect</Header>
        <Money>you earned $ {dollars }</Money>
        <Back onClick={handleRefresh}>Try Again</Back>
      </StopWrapper>
    </StopContainer>
  )
}

export default Stop