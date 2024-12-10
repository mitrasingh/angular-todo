import { Component, inject, input, output } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';
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
      <input type="text" formControlName="title" placeholder="new title" />
      <input
        type="text"
        formControlName="description"
        placeholder="new description"
      />
      <button>Update Todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class EditTodoFormComponent {
  private fb = inject(FormBuilder);

  editForm = this.fb.nonNullable.group({
    id: [''],
    title: [''],
    description: [''],
  });

  ngOnInit() {
    this.editForm.patchValue({
      id: this.todoObj()?.id,
      title: this.todoObj()?.title,
      description: this.todoObj()?.description,
    });
  }

  todoEdited = output<Todo>();
  todoObj = input<Todo>();
}
