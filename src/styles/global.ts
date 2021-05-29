import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --bg-main: #f2f2fc;
        --bg-sidebar: #fdf9ff;
        --border-color: #d4d4e3;
        --blue-color: #19a3f7;
        --text-color: #504e70;
        --title-color: #302e4d;
        --grey-color: #e3e3e3;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    }

    body {
        background-color: var(--bg-main);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
            font-size: 14px;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale;
    }

    /* body, input, button {
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
    } */

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }

    ul,
    li {
        list-style: none;
    }

    @media (max-width: 1601px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 1441px) {
        html {
            font-size: 87.5%;
        }
    }

`;
