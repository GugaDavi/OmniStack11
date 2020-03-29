import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

import * as Pallet from "./colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${Pallet.textColor};
    background: ${Pallet.primaryColor};
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input {
    height: 50px;
    color: ${Pallet.textColor};
    padding: 0 20px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
