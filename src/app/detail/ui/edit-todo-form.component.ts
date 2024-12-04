import { Component, inject, input, output } from '@angular/core';
import { CreateTodo, Todo } from '../../shared/interfaces/todo';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit-todo-form',
  template: `
    <h1>edit</h1>
    <form
      [formGroup]="editForm"
      (ngSubmit)="todoEdited.emit(editForm.getRawValue())"
    >
      <input
        type="text"
        formControlName="title"
        placeholder="will hold current value..."
      />
      <input
        type="text"
        formControlName="description"
        placeholder="will hold current value..."
      />
      <button>Update Todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class EditTodoFormComponent {
  private fb = inject(FormBuilder);

  todoEdited = output<CreateTodo>();
  todos = input.required<Todo[]>();

  editForm = this.fb.nonNullable.group({
    title: [''],
    description: [''],
  });
}
