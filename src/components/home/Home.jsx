import React from 'react'
import { HomeContainer } from './home.style'
import { Counter, Main } from '../../file'
function Home() {
  return (
      <HomeContainer>
      <Counter />
      <Main />
    </HomeContainer>
  )
}

export default Home