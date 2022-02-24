import { ActiveLink } from '../ActiveLink';
import styled from 'styled-components';

const Container = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    text-align: center;
    border-bottom: .2rem solid var(--shapes-fst);
    margin-bottom: 4rem;
    
    a {
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: var(--gray-30);
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.4;
        padding-bottom: 1.6rem;
        width: 100%;

        &.active{
            color: var(--gray-50);
        }
        
        &.active::after {
            content: '';
            position: absolute;
            height: .2rem;
            width: 100%;
            background-color: var(--shapes-thd);
            bottom: -.2rem;
            left: 0;
        }
    }
`;

export function Navigation() {
    return (
        <Container>
            <ActiveLink href='/' activeClassName='active'>
                <a>Colaboradores</a>
            </ActiveLink>
            <ActiveLink href='/positions' activeClassName='active'>
                <a>Cargos</a>
            </ActiveLink>
        </Container>
    );
}
