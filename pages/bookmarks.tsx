import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid, Pagination, Text, Title } from '@components';
import { useState } from 'react';
import { Card } from '@components/bookmarksPage';
import { getBookmarks, Raindrops } from '@api';

const perPage = 6;
const siblingCount = 2;

const Bookmarks: NextPage<Raindrops> = ({ count, items }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <Head>
        <title>Пометки</title>
      </Head>
      <Container css={'row-gap: 3rem'}>
        <Container
          maxWidth={['70vw', '70vw', '72vw', 'calc(22vw * 3 + 2*2vw)', 'calc(18vw * 3 + 2*2vw)']}
        >
          <Title>Пометки</Title>
          <Text>
            Полезный и интересный материал, который я хочу прочитать позже, либо к которому я хочу
            вернуться, чтобы вспомнить что-то
          </Text>
        </Container>
        <Container
          height={[
            'calc(70vw / 16 * 8 * 6 + calc(3 * 1.1 * 1rem + 0.25rem + 0.25rem) * 6 + 5 * 2vw)',
            'calc(70vw / 16 * 8 * 6 + calc(3 * 1.1 * 1rem + 0.25rem + 0.25rem) * 6 + 5 * 2vw)',
            'calc(35vw / 16 * 8 * 3 + calc(3 * 1.1 * 1rem + 0.25rem + 0.25rem) * 3 + 2 * 2vw)',
            'calc(22vw / 16 * 8 * 2 + calc(3 * 1.1 * 1rem + 0.25rem + 0.25rem) * 2 + 1vw)',
            'calc(18vw / 16 * 8 * 2 + calc(3 * 1.1 * 1rem + 0.25rem + 0.25rem) * 2 + 1vw)',
          ]}
        >
          <Grid
            gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            // gridColumnGap={'3rem'}
            gridColumnGap={'2vw'}
            // gridRowGap={'3rem'}
            gridRowGap={'2vw'}
          >
            {items
              .slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)
              .map((el, index) => (
                <Card
                  key={el.title}
                  title={el.title}
                  imgSrc={el.cover}
                  imgPriority={index < perPage / 2}
                  href={el.link}
                />
              ))}
          </Grid>
        </Container>
        <Container>
          <Pagination
            currentPage={currentPage}
            pagesTotal={Math.ceil(count / perPage)}
            siblingCount={siblingCount}
            onPageChange={(x) => setCurrentPage(x)}
          />
        </Container>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await getBookmarks();
  return { props: { count: data.count, items: data.items } };
}

export default Bookmarks;
