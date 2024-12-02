import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../shared/data-access/todo.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: ` <h2>Detail</h2> `,
})
export default class DetailComponent {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
