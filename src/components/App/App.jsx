// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
// import { store } from 'redux/store';

export const App = () => {
  const todos = useSelector(store => store);
  console.log(todos);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem('todos')) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos?.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos?.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
