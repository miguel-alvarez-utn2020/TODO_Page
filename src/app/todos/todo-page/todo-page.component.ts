import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as actions  from '../state/todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  toggleAllCheck: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  toggleAll(){
    this.toggleAllCheck = !this.toggleAllCheck;
    console.log(this.toggleAllCheck);
    this.store.dispatch( actions.toggleAll({completeState: this.toggleAllCheck}) );
  }
}
