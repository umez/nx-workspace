import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Todo } from './todo.model';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <h2>Todo Stats</h2>

      <button (click)="loadData()">Load Todos</button>

      @if (stats()) {
        <p>Total: {{ stats()!.total }}</p>
        <p>Completed: {{ stats()!.completed }}</p>

        @if (stats()!.data.length > 0) {
          <ul>
            @for (todo of stats()!.data; track $index) {
              <li>{{ todo.title }}</li>
            }
          </ul>
        }

      }
  `,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'web-worker';
  stats = signal<{total: number, completed: number, data: Todo[]} | null >(null);

  worker?: Worker;


  ngOnInit() {
    this.worker = new Worker(new URL('./todo.worker', import.meta.url));
    this.worker.onmessage = ({ data }) => {
      this.stats.set(data);
      console.log(this.stats());
    };
  }

  loadData() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await response.json();
    this.worker?.postMessage('loadData');
  }

  ngDestroy() {
    this.worker?.terminate();
  }
}
