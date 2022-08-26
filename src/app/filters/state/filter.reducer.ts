import { filterList, Filters } from './filter.action';
import { createReducer, on } from '@ngrx/store';

export const InitialStateFilter: InitialStateFilter = {
  filterType: 'all',
};

export interface InitialStateFilter{
  filterType: Filters;
}

const _filterReducer = createReducer(
  InitialStateFilter,
  on(filterList, (previousState, { filterType }): InitialStateFilter => {
    return {filterType}
  }) 
);


export function filterReducer(state: any, action: any){
  return _filterReducer(state, action)
}
