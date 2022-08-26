import { createAction, props } from '@ngrx/store';

export type Filters = 'all' | 'complete' | 'pending';

export const filterList = createAction(
  '[Filter] Filter list',
  props<{ filterType: Filters }>()
);
