import { Injectable, signal } from '@angular/core';
import { CreateTodo, Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // Property is private, only can be updated
  #todos = signal<Todo[]>([]);

  // Property can be ready publicly
  todos = this.#todos.asReadonly();

  addTodo(todo: CreateTodo) {
    this.#todos.update((todos) => [
      ...todos,
      { ...todo, id: Date.now().toString() },
    ]);
  }

  completeTodo(id: string) {
    this.#todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  editTodo(updatedTodo: Todo) {
    this.#todos.update((todos) =>
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
  }

  checkTodo(todo: Todo) {
    console.log(todo);
  }
}
