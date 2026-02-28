import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { catchError,  of, tap } from 'rxjs';
import { WidgetDataService } from './widget-data.service';
import { WidgetErrorComponent } from './widget-error/widget-error.component';
import { Task } from '../task.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { enterpriseRetryStrategy } from '../../core/error/retry.strategy';

@Component({
  selector: 'eh-widget',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDividerModule, MatButtonModule, WidgetErrorComponent],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {


  private widgetData = inject(WidgetDataService);

  // Error signal
  readonly error = signal<Error | null>(null);



  // tasks$!: Observable<Task[]> | null | Error;
  // error: Error | null = null;
  // widgetData = inject(WidgetDataService);




    readonly tasks = toSignal<Task[] | any>(
    this.widgetData.load().pipe(
      catchError(err => {
        this.error.set(err);
        return of([]); // fallback empty list
      })
    )
  );

  addTask() {
    this.widgetData.addTaskSync({ id: 0, title: 'New Task' });
  }
}

