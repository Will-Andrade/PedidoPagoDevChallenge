import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --white: #FFF;

        --gray-30: #A3B8B0;
        --gray-40: #587169;
        --gray-50: #34423D;

        --shapes-fst: #EAEFED;
        --shapes-snd: #B5F1DD;
        --shapes-thd: #22e0A1;
        --shapes-frt: #CAD6D1;

    }
    
    html {
        font-size: 62.5%;
    }

    body {
        background: #F8FAF9;
        color: #587169;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        line-height: 1;
    }
`;

const BasicLayout = ({ children }: { children: any }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default BasicLayout;
