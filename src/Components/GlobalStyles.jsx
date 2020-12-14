import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        color:inherit;
        text-decoration: none;
    }
    *{
        box-sizing:border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0px;
        padding: 0px;
        color: #2e363e;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        user-select: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar { 
            display: none !important; 
        }
    }
}
`;

export default globalStyles;
