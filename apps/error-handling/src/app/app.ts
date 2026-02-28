import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  imports: [RouterModule, WidgetComponent, MatToolbarModule, MatSnackBarModule ],
  selector: 'eh-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'error-handling';
}
