import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark-blue: hsl(209, 23%, 22%);      // Dark Mode Elements
        --very-dark-blue-bg: hsl(207, 26%, 17%); // Dark Mode Background
        --very-dark-blue-txt: hsl(200, 15%, 8%);  // Light Mode Text
        --dark-gray: hsl(0, 0%, 52%);         // Light Mode Input
        --very-light-gray: hsl(0, 0%, 98%);   // Light Mode Background
        --white: hsl(0, 0%, 100%);            // Dark Mode Text & Light Mode Elements
        --gray: #a7a7a7;
    }

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
    }
    
    .side-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .bs-1 {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    }

`;
