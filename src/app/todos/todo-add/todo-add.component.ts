import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../state/todo.action'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  form!: FormControl

  constructor(private store: Store<AppState>) { 
    this.form = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }


  agregarTodo(){
    if(this.form.invalid){return}
    this.store.dispatch(actions.crearTodo({text: this.form.value}));
  }
}
