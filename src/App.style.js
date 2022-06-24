import { createGlobalStyle} from "styled-components"
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const AppContainer = styled.div`
width: 100vw;
height: 100vh;
color: white;
display: flex;
background: lightseagreen;
overflow: hidden;
`

export default GlobalStyle