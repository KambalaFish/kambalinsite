import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid, Pagination, Text, Title } from '@components';
import { useState } from 'react';
import { Card } from '@components/bookmarksPage';
import { getBookmarks, Raindrops } from '@api';
import { minDevice, SizeFormatsExtended } from '@styles/theme';
import { captionHeight } from '@components/bookmarksPage';

const perPage = 6;
const siblingCount = 2;

const cardWidth: SizeFormatsExtended<string> = {
  mobileSmall: '20rem',
  mobile: '28rem',
  tablet: '26rem',
  laptop: '17rem',
  laptopLarge: '20rem',
};

const columnGap: SizeFormatsExtended<string> = {
  mobileSmall: '2.5rem',
  mobile: '3rem',
  tablet: '2rem',
  laptop: '2rem',
  laptopLarge: '2rem',
};

const rowGap: SizeFormatsExtended<string> = {
  mobileSmall: '2.5rem',
  mobile: '3rem',
  tablet: '2rem',
  laptop: '2rem',
  laptopLarge: '2rem',
};

const Bookmarks: NextPage<Raindrops> = ({ count, items }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <Head>
        <title>Пометки</title>
      </Head>
      <Container css={'row-gap: 2rem'}>
        <Container
          maxWidth={[
            cardWidth.mobileSmall,
            cardWidth.mobile,
            `calc(2 * ${cardWidth.tablet})`,
            `calc(${cardWidth.laptop} * 3 + 2 * 2rem)`,
            `calc(${cardWidth.laptopLarge} * 3 + 2 * 2rem)`,
          ]}
        >
          <Title>Пометки</Title>
          <Text>
            Полезный и интересный материал, который я хочу прочитать позже, либо к которому я хочу
            вернуться, чтобы вспомнить что-то
          </Text>
        </Container>
        <Container
          height={[
            `calc(${cardWidth.mobileSmall} / 16 * 8 * 6 + ${captionHeight} * 6 + 5 * ${rowGap.mobileSmall})`,
            `calc(${cardWidth.mobile} / 16 * 8 * 6 + ${captionHeight} * 6 + 5 * ${rowGap.mobile})`,
            `calc(${cardWidth.tablet} / 16 * 8 * 3 + ${captionHeight} * 3 + 2 * ${rowGap.tablet})`,
            `calc(${cardWidth.laptop} / 16 * 8 * 2 + ${captionHeight} * 2 + ${rowGap.laptop})`,
            `calc(${cardWidth.laptopLarge} / 16 * 8 * 2 + ${captionHeight} * 2 + ${rowGap.laptopLarge})`,
          ]}
        >
          <Grid
            gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            gridColumnGap={[
              columnGap.mobileSmall,
              columnGap.mobile,
              columnGap.tablet,
              columnGap.laptop,
              columnGap.laptopLarge,
            ]}
            gridRowGap={[
              rowGap.mobileSmall,
              rowGap.mobile,
              rowGap.tablet,
              rowGap.laptop,
              rowGap.laptopLarge,
            ]}
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
                  date={el.created}
                  cardWidth={[
                    cardWidth.mobileSmall,
                    cardWidth.mobile,
                    cardWidth.tablet,
                    cardWidth.laptop,
                    cardWidth.laptopLarge,
                  ]}
                  imgSizes={`
                  ${minDevice.laptopLarge} ${cardWidth.laptopLarge}, 
                  ${minDevice.laptop} ${cardWidth.laptop}, 
                  ${minDevice.tablet} ${cardWidth.tablet}, 
                  ${minDevice.mobile} ${cardWidth.mobile}, 
                  ${cardWidth.mobileSmall}`}
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
  return { props: { count: data.count, items: data.items }, revalidate: 43200 };
}

export default Bookmarks;
