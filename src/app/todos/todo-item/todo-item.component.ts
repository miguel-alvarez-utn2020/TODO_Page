import { editTodo, borrarTodo } from './../state/todo.action';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.models';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { timeout } from 'rxjs';
import { TitleStrategy } from '@angular/router';
import * as actions from '../state/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() todo!: Todo;
  currentTodo!: Todo;
  checkComplete!: FormControl;
  textInput!: FormControl;
  edit: boolean = false;
  @ViewChild('inputTemp') inputTemp!: ElementRef;


  constructor(private store: Store<AppState>) {}


  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['todo']) {  
      this.currentTodo = { ...changes['todo'].currentValue };
    }
  }

  ngOnInit(): void {
    this.checkComplete = new FormControl(this.currentTodo.complete);

    this.textInput = new FormControl(
      this.currentTodo.text,
      Validators.required
    );
    
    this.checkComplete.valueChanges.subscribe((value) => {
      console.log(value);
      this.store.dispatch(actions.completeTodo({ id: this.currentTodo.id }));
    });
  }

  editing() {
    this.edit = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => {
      this.inputTemp.nativeElement.select();
    }, 1);
  }

  edited() {
    this.edit = false;
    if (this.textInput.invalid) {
      return;
    }
    if (this.textInput.value === this.currentTodo.text) {
      return;
    }
    console.log('todo component: ', this.todo);
    
    this.store.dispatch(
      actions.editTodo({ id: this.todo.id, text: this.textInput.value})
    );
  }

  borrarTodo(){
    this.store.dispatch( actions.borrarTodo({id: this.todo.id}) );
  }
}
