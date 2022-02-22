import styled from 'styled-components';

const TabContainer = styled.section`
    background: var(--white);
    width: 100%;
    height: 84.1rem;
    padding: 4rem 2.4rem;
    border-radius: .8rem;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
`;

export function TabComponent() {
    return (
        <TabContainer>
            <h2>Hello</h2>
        </TabContainer>
    );
}