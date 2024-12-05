import { Component, inject, input, output } from '@angular/core';
import { CreateTodo, Todo } from '../../shared/interfaces/todo';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit-todo-form',
  template: `
    <h1>edit</h1>
    @if (todoObj(); as todo) {
    <form
      [formGroup]="editForm"
      (ngSubmit)="todoEdited.emit(editForm.getRawValue())"
    >
      <input
        type="text"
        formControlName="title"
        placeholder="{{ todo.title }}"
      />
      <input
        type="text"
        formControlName="description"
        placeholder="{{ todo.description }}"
      />
      <button>Update Todo</button>
    </form>
    }
  `,
  imports: [ReactiveFormsModule],
})
export class EditTodoFormComponent {
  private fb = inject(FormBuilder);

  todoEdited = output<CreateTodo>();
  todoObj = input<Todo>();

  editForm = this.fb.nonNullable.group({
    title: [''],
    description: [''],
  });
}
