import { Component, inject, output } from '@angular/core';
import { CreateTodo } from '../../shared/interfaces/todo';
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
  todoEdited = output<CreateTodo>();
  private fb = inject(FormBuilder);

  editForm = this.fb.nonNullable.group({
    title: [''],
    description: [''],
  });
}
