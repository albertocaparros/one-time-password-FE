import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        background: white;
        color: black;
        opacity :0.8;
        font-family: Ubuntu, sans-serif;
        letter-spacing: 0.03rem;
        line-height: 0.8rem;
        margin: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number]{
        -moz-appearance: textfield;
        appearance: textfield;
    }


`
export default GlobalStyles
