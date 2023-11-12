import styled from 'styled-components'

export const NumberInput = styled.input`
        margin: 0; 
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid ;
        border-bottom-color: ${props => props.borderBottomColor};
        color: ${props => props.color};
        background-color: transparent;
        outline: none;
        width: 2rem;
        text-align: center;
        font-size: larger;
`
