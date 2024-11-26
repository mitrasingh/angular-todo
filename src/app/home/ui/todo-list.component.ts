import { Component, input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  template: ``,
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
}
