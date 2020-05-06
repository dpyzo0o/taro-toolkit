import { combineReducers } from '@reduxjs/toolkit';

import countReducer from './slices/count';
import todosReducer from './slices/todos';

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer,
});

export default rootReducer;
