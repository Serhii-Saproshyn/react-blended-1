import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = { todos: [] };

export const todos = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      return state.todos.filter(({ id }) => id !== payload);
    },
    updateTodo: (state, { payload }) => {
      return state.todos.map(({ text, id }) => {
        return id === payload.id ? { ...payload } : { text, id };
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todos.actions;
