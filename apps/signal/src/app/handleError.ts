import { ErrorHandler } from "@angular/core";

export class HandleError implements ErrorHandler {
  handleError(error: any): void {
     if (error?.status) {
    // HTTP Error
        console.warn('HTTP Error:', error.status);
      } else {
        console.error('Client Error:', error);
      }
  }

}
