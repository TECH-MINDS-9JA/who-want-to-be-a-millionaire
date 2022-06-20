import React, { useContext } from 'react'
import { MoneyContainer, Num, Cash } from './money.style'
import { ContextContext } from '../../context/Context'
import './money.css'
function Money({ data }) {
  const { questionNum } = useContext(ContextContext)
  return (
    <MoneyContainer className={questionNum === data.id ? 'active'  : null}>
          <Num>{data.id }</Num>
          <Cash>$ { data.cash}</Cash>
    </MoneyContainer>
  )
}

export default Money