import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/state/todo.reducer';
import { filterReducer, InitialStateFilter } from './filters/state/filter.reducer';
import { Filters } from './filters/state/filter.action';

export interface AppState {
  todos: Todo[];
  filter: InitialStateFilter
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
