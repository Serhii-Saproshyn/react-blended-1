import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { fetchCountry } from 'service/country-service';
import { useParams } from 'react-router-dom';
export const Country = () => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await fetchCountry(countryId);
      setCountry(result);
    })();
  }, [countryId]);
  console.log(country);
  return (
    <Section>
      <Container>
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
