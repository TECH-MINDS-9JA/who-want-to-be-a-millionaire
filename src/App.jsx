import React, { useContext, useEffect } from 'react'
import GlobalStyle from './App.style'
import { AppContainer } from './App.style'
import { Home, Cash, Stop, Start,  } from './file'
import { ContextContext } from './context/Context'

function App() {
    const { time, user } = useContext(ContextContext)

    return (
        <AppContainer>
            <GlobalStyle />
            {
                !user ? <Start />
                    :
                <>
                    {
                        time ? <Stop />
                            :
                            <>
                                <Home />
                                <Cash />
                            </>
                    }
                </>
            }
         </AppContainer>
  )
}
export default App