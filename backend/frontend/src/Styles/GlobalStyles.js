import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle `
*, *::before, *::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: "Montserrat", Sans-Serif;
    overflow-x: hidden;
    background-color: #19191B;
    color: white;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

img{
    width: 100%;
    height: auto;
}
`

export default GlobalStyles;