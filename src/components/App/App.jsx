import dataStats from 'data/data.json';
import forbes from 'data/forbes.json';
import transactionsHistory from 'data/transactions.json';

import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import dataArticle from 'data/article.json';
export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={dataArticle.poster}
          tag={dataArticle.tag}
          title={dataArticle.title}
          description={dataArticle.description}
          name={dataArticle.name}
          avatar={dataArticle.avatar}
          postedAt={dataArticle.postedAt}
        />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={dataStats} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory transactions={transactionsHistory} />
      </Container>
    </Section>
  );
};
