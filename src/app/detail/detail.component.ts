import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../shared/data-access/todo.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditTodoFormComponent } from './ui/edit-todo-form.component';
@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    @if (todo(); as todo) {
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.description }}</p>
    <button (click)="toggleEditTodo()">Edit</button>
    } @else {
    <p>Could not find todo.</p>
    } @if (showEditTodo) {
    <app-edit-todo-form [todos]="todoService.todos()"></app-edit-todo-form>
    }
  `,
  imports: [EditTodoFormComponent],
})
export default class DetailComponent {
  todoService = inject(TodoService);
  private route = inject(ActivatedRoute);

  private paramMap = toSignal(this.route.paramMap);

  showEditTodo: boolean = false;

  toggleEditTodo(): void {
    this.showEditTodo = !this.showEditTodo;
  }

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
