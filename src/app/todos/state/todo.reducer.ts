import {
  completeTodo,
  crearTodo,
  editTodo,
  borrarTodo,
  toggleAll,
  deleteCompleteTodo,
} from './todo.action';
import { Todo } from './../models/todo.models';
import { on, createReducer } from '@ngrx/store';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { text }) => [...state, new Todo(text)]),

  on(completeTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editTodo, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),

  on(borrarTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggleAll, (state, { completeState }) => {
    return state.map( todo => {
      return {
        ...todo,
        complete: completeState
      }
    } )
  } ),

  on(deleteCompleteTodo, (state) => state.filter( todo => !todo.complete ))
);


export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
