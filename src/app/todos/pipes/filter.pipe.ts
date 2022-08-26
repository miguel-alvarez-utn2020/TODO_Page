import { Filters } from './../../filters/state/filter.action';
import { Todo } from './../models/todo.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: Filters): Todo[] {
    
    switch (filter) {
      case 'complete':
        return todos.filter(todo => todo.complete)
      case 'pending':
        return todos.filter(todo => !todo.complete)
      default:
        return todos
    }
    

    

    return todos;
  }

}
