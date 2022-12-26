import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;    

    }

    h1 {
        font-size: 1.1rem;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;   
        background-color: ${({ theme }) => theme.background}; 
        color:  ${({ theme }) => theme.text}

    }
    
    .side-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    

    @media screen and (min-width: 900px) {
        .side-padding {
            padding-left: 5rem;
            padding-right: 5rem;
        }

        .container-cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
    }
    }

    
`;
