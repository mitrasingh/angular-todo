import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  template: ` <p>Observable Test</p> `,
})
export class ObservableTest {
  myObservable$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);
  });
}
