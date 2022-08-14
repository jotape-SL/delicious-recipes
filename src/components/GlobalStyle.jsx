import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Genaral Global styles
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
    @media (max-width: 1000px){
        margin: 0 5%;
    }
}

h4{
    font-size: 1rem;
    color: rgb(56,56,56);
}
h3{
    font-size: 1.2rem;
    color: rgb(56,56,56);
    line-height: 2.5rem;
    margin: 2rem 0;
}

a{
    color: rgb(56,56,56);
}

.sr-only {
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}
`;

export default GlobalStyle;

// Components global styled
const Wrapper = styled.div`
  margin: 4rem 0rem;
  @media (max-width: 800px) {
    h3 {
      text-align: center;
    }
  }
`;

const Card = styled.div`
  img {
    border-radius: 1.5rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 1rem;
    text-align: center;
    position: absolute;
    height: 30%;
    width: 100%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    font-weight: 600;
    z-index: 6;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export { Wrapper, Card, Gradient };
