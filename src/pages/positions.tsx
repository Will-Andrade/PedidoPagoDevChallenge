import Head from 'next/head';
import BasicLayout from "../../layout/Basic";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";

import styled from 'styled-components';

const Main = styled.main`
  max-width: 95.6rem;
  margin: 0 auto;
  padding: 4rem 2.4rem;

  h1 {
    font-size: 3.2rem;
    line-height: 3.2rem;
    color: var(--gray-50);
    font-weight: 600;
    margin: 0 0 2.4rem;
  }
`;

export default function Positions() {
    return (
        <>
            <Head>
                <title>PedidoPago | Dev Challenge</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BasicLayout>
                <Header />
                    <Main>
                        <h1>Cargos</h1>
                        <Summary />
                    </Main>
            </BasicLayout>
        </>
    );
}