import { MdMoreVert } from 'react-icons/md';

import styled from "styled-components";

const Container = styled.table` 

    width: 100%;

    th, td, caption {
        text-align: left;
    }

    caption {
        margin-bottom: 4rem;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.6;
        color: var(--gray-50);
    }

    th, td {
        border-bottom: .1rem solid var(--shapes-frt);
        padding: 1.2rem;
    }

    th {
        border-top: .1rem solid var(--shapes-frt);
        color: var(--gray-40);
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.7;
    }
    
    th:first-child {
        border-left: .1rem solid var(--shapes-frt);
        border-top-left-radius: 8px;
    }

    th:last-child {
        border-right: .1rem solid var(--shapes-frt);
        border-top-right-radius: 8px;
    }
    
    td {
        font-size: 1.2rem;
        line-height: 1.4;
    }

    td:first-child {
        font-weight: 600;
    }

    td:last-child {
        svg {
            width: 1.8rem;
            height: 1.8rem;
        }
    }

    span {
        display: inline-block;
        padding: .5rem 2rem;
        font-size: 1.4rem;
        font-weight: 1.6;
        font-weight: 500;
        border-radius: 12px;
        background: var(--shapes-fst);
    }

    span.active {
        background: var(--shapes-snd);
    }
`;

export function DataTable() {
    return (
        <>
            <Container cellSpacing={0}>
                <caption>Listagem de colaboradores</caption>
                <thead>
                    <tr>
                        <th>Nome completo</th>
                        <th>Departamento</th>
                        <th>Cargo</th>
                        <th>Unidade</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="#" alt="Employee picture" />
                            Pikachu Soares do Santos Dias
                        </td>
                        <td>Admnistrativo</td>
                        <td>Diretor</td>
                        <td>Quartel General</td>
                        <td>
                            <span className='active'>Ativo</span>
                        </td>
                        <td><MdMoreVert /></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="#" alt="Employee picture" />
                            Godzilla da Silva
                        </td>
                        <td>Admnistrativo</td>
                        <td>Gerente</td>
                        <td>Quartel General</td>
                        <td>
                            <span>Inativo</span>
                        </td>
                        <td><MdMoreVert /></td>
                    </tr>
                </tbody>
            </Container>
        </>
    );
}