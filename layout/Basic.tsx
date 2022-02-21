import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
