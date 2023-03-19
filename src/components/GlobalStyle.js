import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
          body {
            background-color:  rgb(234, 237, 237);
            padding-top: 15px;
            padding-bottom: 15px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }
           button {
            margin: 0 auto;
            cursor: pointer;
            border: none;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          `;
