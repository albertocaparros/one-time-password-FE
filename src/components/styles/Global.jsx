import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        background: white;
        color: black; 
        font-family: Ubuntu, sans-serif;
        margin: 0;
    }
`
export default GlobalStyles
