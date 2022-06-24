import React,{ useContext} from 'react'
import { SmallContainer, Earn,  } from './small.style'
import { ContextContext } from '../../context/Context'
function Small() {
    const { dollars } = useContext(ContextContext)
    return (
        <>
            {
                dollars === 0 ? null
                    : <SmallContainer> <Earn>${dollars}</Earn> </SmallContainer>
            }
            </>
            
  )
}

export default Small