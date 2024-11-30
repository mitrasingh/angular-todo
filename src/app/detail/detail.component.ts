import { Component, inject } from '@angular/core';
import { TodoService } from '../shared/data-access/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: ` <h2>Detail</h2> `,
})
export default class DetailComponent {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);
}
