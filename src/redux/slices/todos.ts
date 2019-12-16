import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let nextTodoId = 3;

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

let initialState: TodoItem[] = [
  {
    id: 1,
    title: 'eat',
    completed: false,
  },
  {
    id: 2,
    title: 'sleep',
    completed: false,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({
        id: nextTodoId++,
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.splice(
        state.findIndex(todo => todo.id === action.payload),
        1
      );
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find(x => x.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
