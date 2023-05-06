import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from '../service/country-service';
import { useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onFormSubmit = selectedRegion => {
    setRegion(selectedRegion);
    setSearchParams({ query: selectedRegion });
  };

  useEffect(() => {
    // const currentRegion = searchParams.get('query');

    (async () => {
      if (!region) {
        return;
      }
      const result = await fetchByRegion(region);
      setCountries(result);
    })();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onFormSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
