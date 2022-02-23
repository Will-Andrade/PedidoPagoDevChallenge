import { CgSearch } from 'react-icons/cg';

import styled from 'styled-components';

const Container = styled.fieldset`
    border-radius: .8rem;
    border: .2rem solid var(--shapes-frt);
    padding: 1rem;

    legend {
        color: var(--gray-30);
        font-size: 1.4rem;
        line-height: 1;
        font-weight: 500;
        padding: 0 .4rem;
    }

    div {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        gap: 1.2rem;
        
        svg {
            width: 1.8rem;
            height: 1.8rem;
        }

        input {
            border: none;
            width: 100%;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 1.5;
        }
    }
`;

export function SearchBar() {
    return (
        <Container>
            <legend>Pesquisar por</legend>
            <div>
                <CgSearch />
                <input type="text" name="" id="" placeholder='Pesquise por nome ou CPF' />
            </div>
        </Container>
    );
}