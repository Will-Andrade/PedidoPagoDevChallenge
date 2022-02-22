import styled from 'styled-components';

const Container = styled.header`
    border-bottom: .1rem solid var(--shapes-fst);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 6.1rem;
    padding: 0 3.2rem;
    background: var(--white);

    & > div:first-child {
        border-right: .1rem solid var(--shapes-fst);
        height: 100%;
        display: grid;
        place-items: center;
        padding: 0 3.2rem 0 0;

        img {
            width: 2.956rem;
            height: 2.891rem;
        }
    }

    & > div:last-child {
        border-left: .1rem solid var(--shapes-fst);
        display: flex;
        align-items: center;
        gap: 1rem;

        height: 100%;
        padding: 0 0 0 3.2rem;

        & > div:first-child {
            background: var(--shapes-snd);
            border-radius: 50%;
            width: 3.2rem;
            height: 3.2rem;
            display: grid;
            place-items: center;

            p {
                font-size: 1.4rem;
                line-height: 1.4;
                color: var(--gray-50);
            }
        }

        & > div:last-child {
            p {
                font-size: 1.4rem;
                font-weight: 600;
                line-height: 1.4;
                color: var(--gray-50);
            }

            span {
                font-size: 1.2rem;
                line-height: 1.4;
            }
        }
    }
`;

export function Header() {
    return (
        <Container>
            <div>
                <img src="/ppLogo.png" alt="Pedido Pago logo" />
            </div>
            <div>
                <div><p>WA</p></div>
                <div>
                    <p>Willian Andrade</p>
                    <span>meus dados</span>
                </div>
            </div>
        </Container>
    );
};
