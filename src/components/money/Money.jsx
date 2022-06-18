import React, { useState } from 'react'
import { MoneyContainer, Num, Cash } from './money.style'
// import './money.css'
function Money({ data }) {
  const [questionNum, setQuestionNum] = useState(1)
  return (
    <MoneyContainer className={questionNum === data.id ? 'active'  : null}>
          <Num>{data.id }</Num>
          <Cash>$ { data.cash}</Cash>
    </MoneyContainer>
  )
}

export default Money