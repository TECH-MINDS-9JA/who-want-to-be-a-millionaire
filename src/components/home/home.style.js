import styled from 'styled-components'
import { bgImg } from '../../file'
export const HomeContainer = styled.div`
    flex: 3;
    width: 100%;
    height: 100%;
    display: flex;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), #020230),url(${props => props.bg}) center;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    @media(max-width:498px){
        min-width: 100%;
    }
`