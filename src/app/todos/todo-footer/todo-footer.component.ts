import { Filters } from './../../filters/state/filter.action';
import { AppState } from './../../app.state';
import { Store, ActionReducerMap } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as actionFilter from '../../filters/state/filter.action';
import * as actionTodo from '../state/todo.action'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: Filters = 'all'
  filters: Filters[] = ['all', 'complete', 'pending'];
  pendingTodo: number = 0
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe( filtro => {
    //   this.currentFilter = filtro.filterType;
    // } )
    this.store.subscribe( state => {
      this.currentFilter = state.filter.filterType;
      this.pendingTodo = state.todos.filter( todo => !todo.complete ).length;
    } )
  }

  changeFilter(filter: Filters){
    this.currentFilter = filter;
    console.log(this.currentFilter);
    this.store.dispatch( actionFilter.filterList( {filterType: this.currentFilter} ));
    
  }

  deleteCompleteTodo(){
    this.store.dispatch( actionTodo.deleteCompleteTodo());
  }

}
