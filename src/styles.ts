import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    color: #ffffff;
    background-color: #f7f7f7;
    font-family: 'Roboto', sans-serif;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #0e0e0e;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #222222;
      border-radius: 5px;
    }

    select {
      width: 100%;
      height: 30px;
      border: 1px solid #b5b5b5;
    }

    a {
      color: #ffffff;
      text-decoration: none;
      cursor: pointer;
    }
  }
`