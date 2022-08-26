import { Filters } from './../../filters/state/filter.action';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []
  currentFilter!: Filters;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe( todos => {
    //   this.todos = todos;
    // } )
    this.store.subscribe( ({todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter.filterType;
    } )
  }

}
