import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Toast } from './toast.model';

@Injectable({ providedIn: 'root' })
export class ToastService {

  private snackBar = inject(MatSnackBar);

  show(toast: Toast) {
    this.snackBar.open(
      toast.message,
      'Close',
      {
        duration: toast.duration ?? 3000,
        panelClass: [`toast-${toast.type}`],
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    );
  }

  success(message: string, duration?: number) {
    this.show({ message, type: 'success', duration });
  }

  error(message: string, duration?: number) {
    this.show({ message, type: 'error', duration });
  }

  warning(message: string, duration?: number) {
    this.show({ message, type: 'warning', duration });
  }

  info(message: string, duration?: number) {
    this.show({ message, type: 'info', duration });
  }
}
