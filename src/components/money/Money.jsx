import React from 'react'
import { MoneyContainer, Num, Cash} from './money.style'
function Money({data}) {
  return (
      <MoneyContainer>
          <Num>{data.id }</Num>
          <Cash>$ { data.cash}</Cash>
    </MoneyContainer>
  )
}

export default Money