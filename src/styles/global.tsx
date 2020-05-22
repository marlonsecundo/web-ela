import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  outline: 0;
}

*:before, *:after {
  box-sizing: inherit;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Nunito', sans-serif;
}

div, section, nav, a, button, form, body {
  display: flex;
}

button, input {
   border: none;
   outline: none;
}

a {
  text-decoration: none;
}

`;
