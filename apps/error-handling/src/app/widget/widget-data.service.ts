import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { Task } from '../task.model';
import { enterpriseRetryStrategy } from '../../core/error/retry.strategy';

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService {

  http = inject(HttpClient);


  load() {
    return this.http.get<Task[]>(`https://jsonplaceholder.typicode.com/todosa?_start=0&_limit=3`).pipe(
      enterpriseRetryStrategy(),
      catchError(error => {
        return throwError(() => new Error('Counld not load tasks'));
      })
    )
  }

  addTaskSync(task: Task): Task | never {
    if (task.id === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }
}
