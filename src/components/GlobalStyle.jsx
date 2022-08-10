import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 20%;
}

h4{
    font-size: 1rem;
    color: rgb(56,56,56);
}
h3{
    font-size: 1.5rem;
    color: rgb(56,56,56);
    line-height: 2.5rem;
    margin: 2rem 0;
}

a{
    color: rgb(56,56,56);
}
`;

export default GlobalStyle;