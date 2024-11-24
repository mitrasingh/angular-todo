import { Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // Property is private, only can be updated
  #todos = signal<Todo[]>([]);

  // Property can be ready publicly
  todos = this.#todos.asReadonly();

  addTodo(todo: Todo) {
    this.#todos.update((todos) => [...todos, todo]);
  }
}
