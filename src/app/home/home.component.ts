import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/data-access/todo.service';
@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <app-todo-form (todoSubmitted)="createTodo($event)" />
  `,
  imports: [TodoFormComponent],
})
export default class HomeComponent {
  todoService = inject(TodoService);
  createTodo(todo: Todo) {
    console.log(todo);
  }
}
