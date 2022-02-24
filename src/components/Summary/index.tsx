import styled from 'styled-components';
import { DataTable } from '../DataTable';
import { Navigation } from '../Navigation';
import { SearchBar } from '../SearchBar';

const TabContainer = styled.section`
    background: var(--white);
    width: 100%;
    height: 84.1rem;
    padding: 4rem 2.4rem;
    border-radius: .8rem;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
`;

export function Summary() {
    return (
        <TabContainer>
            <Navigation />
            <SearchBar />
            <DataTable />
        </TabContainer>
    );
}