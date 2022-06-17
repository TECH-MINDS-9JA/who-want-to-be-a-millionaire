import React from 'react'
import GlobalStyle from './App.style'
import { AppContainer } from './App.style'
import { Home, Cash } from './file'
function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            <Home />
            <Cash />
         </AppContainer>
  )
}
export default App