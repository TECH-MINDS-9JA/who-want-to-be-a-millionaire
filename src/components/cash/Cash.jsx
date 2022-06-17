import React from 'react'
import { CashContainer, CashWrapper, MoneyContainer, Num,Cashes } from './cash.style'
import { Money, MoneyData} from '../../file'
function Cash() {
  return (
      <CashContainer>
      <CashWrapper>
        {
          MoneyData.map((data) => <Money key={data.id} data={data} />)
        }
      </CashWrapper>
    </CashContainer>
  )
}

export default Cash