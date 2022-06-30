import React, { useContext } from 'react'
import { HomeContainer } from './home.style'
import { Counter, Main, Small, bgImg } from '../../file'
import { ContextContext } from '../../context/Context'
function Home() {
  const { time } = useContext(ContextContext)
  return (
    <HomeContainer bg={bgImg}>
      <Counter />
      <Main />
      <Small />
    </HomeContainer>
  )
}

export default Home