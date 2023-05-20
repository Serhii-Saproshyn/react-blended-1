import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = { todos: [{ text: 'mnfgdfn', id: '123' }] };

export const todos = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.todos.push(payload);
      },
      prepare(todos) {
        return {
          payload: {
            ...todos,
          },
        };
      },
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map(({ text, id }) =>
        id === payload.id ? { ...payload } : { text, id }
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todos.actions;
