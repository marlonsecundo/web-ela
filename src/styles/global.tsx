import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
html {
  font-size: 100%;
  overflow: auto;
  box-sizing: border-box;
  
  height: 100%;
  overflow-x: hidden;

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

  height: 100%;
}

div, section, nav, a, button, form {
  display: flex;
}

button, input {
   border: none;
   outline: none;
}

a {
  text-decoration: none;
}

#gatsby-focus-wrapper, #___gatsby {
  display: block;
  width: 100%;
  height: 100%;
}
`;
