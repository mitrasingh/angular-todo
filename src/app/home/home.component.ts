import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <app-todo-form />
  `,
  imports: [TodoFormComponent],
})
export default class HomeComponent {}
