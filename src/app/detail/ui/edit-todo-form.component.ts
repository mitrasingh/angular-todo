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
      <input type="text" formControlName="title" placeholder="new title" />
      <input
        type="text"
        formControlName="description"
        placeholder="new description"
      />
      <p>{{ titleValue }}</p>
      <button>Update Todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class EditTodoFormComponent {
  ngOnInit() {
    this.idValue = this.todoObj()!.id;
    this.titleValue = this.todoObj()!.title;
    this.descriptionValue = this.todoObj()!.description;
    this.editForm.patchValue({
      id: this.idValue,
      title: this.titleValue,
      description: this.descriptionValue,
    });
  }
  private fb = inject(FormBuilder);

  todoEdited = output<Todo>();
  todoObj = input<Todo>();
  idValue = '';
  titleValue = '';
  descriptionValue = '';

  editForm = this.fb.nonNullable.group({
    id: [this.idValue],
    title: [this.titleValue],
    description: [this.descriptionValue],
  });
}
