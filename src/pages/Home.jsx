import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion, fetchCountry } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  // const [region, setRegion] = useState('');
  useEffect(() => {
    async function getCountries() {
      const result = await fetchByRegion();
      setCountries(result);
    }
    getCountries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
