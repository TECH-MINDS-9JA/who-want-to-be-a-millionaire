import styled from 'styled-components'

export const SmallContainer = styled.div`
    position: absolute;
    top: 8%;
    right: 10px;
    padding: 10px;
    background: lightgreen;
    border-radius: 5px;

    
    @media(min-width:495px){
            display: none;
    }
    @media(max-width:474px){
        display: block;
    }
`

export const Earn = styled.h2`
    font-size: 20px;
    font-weight: 700;
    font-family: monospace;
`