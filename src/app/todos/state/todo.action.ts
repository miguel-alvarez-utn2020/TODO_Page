import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crea todo',
  props<{ text: string }>()
);

export const completeTodo = createAction(
  '[TODO] Complete todo',
  props<{id: number}>()
)

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{id: number, text: string}>()
)

export const borrarTodo = createAction(
  '[TODO] Borrar todo',
  props<{id: number}>()
)

export const toggleAll = createAction(
  ' [TODO] Toggle all',
  props<{completeState: boolean}>()
)

export const deleteCompleteTodo = createAction(
  '[TODO] Borrar completados '
)