"use client"
import Head from 'next/head';
import styled from 'styled-components';

import { FilterBart } from 'components/filterBar/filterBar';
import { DefaultPageLayout } from 'components/defaultPage/defaultPageLayout';
import { ProductsList } from 'components/productList/productsList';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
      <DefaultPageLayout>
        <Head>
          <title>Capputeeno</title>
        </Head>
        <PageWrapper>
          <FilterBart />
          <ProductsList />
        </PageWrapper>
      </DefaultPageLayout>
  );
}