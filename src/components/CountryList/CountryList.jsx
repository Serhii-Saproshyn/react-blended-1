import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <Link to={`country/${country.id}`}>
              <img src={country.flag} alt={country.id} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
