import { Component, input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ul>
      @for (todo of todos(); track todo.id) {
      <li>
        <a>{{ todo.title }}</a>
      </li>
      } @empty {
      <li>Nothing to do!</li>
      }
    </ul>
  `,
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
}
