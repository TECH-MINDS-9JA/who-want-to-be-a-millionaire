import styled from 'styled-components'

export const OptionContainer = styled.div`
    flex: 1;
    border: 2px solid gray;
    padding: 10px;
    border-radius: 10px;
    min-width: 300px;
    gap: 2rem;
    cursor: pointer;
    box-shadow: 0px 2px 2px 0px darkgray;
background: linear-gradient(#0e0124, #22074d);
    &:hover{
        background: #22074d;
    }
`
export const Text = styled.p`
text-align: center;
font-weight: lighter;
font-size: 18px;
font-family: monospace;
`