import { Component, ErrorHandler, signal } from '@angular/core';
import { apply, email, form, FormField, minLength, required, schema, Schema, submit } from '@angular/forms/signals';
import { HandleError } from './handleError';
interface User {
  firstName: string;
  lastName: string;
  email: string;
  notifyByEmail: boolean
}

const nameSchema: Schema<string> = schema((path) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  required(path, { message: `This field is required` }),
  minLength(path, 3, { message: `The value is too short` })
})

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',

  imports: [FormField],
  template: `
    <h3>SignUp Signal Form</h3>
    <form (submit)="onSubmit($event)">
      <input [formField]="signupForm.firstName" placeholder="Enter Your Name" type="text" />
      @for (error of signupForm.firstName().errors(); track $index) {
        <div class="error">{{error.message}}</div>
      }
      <input [formField]="signupForm.lastName" placeholder="Your Last Name" type="text" />
      @for (error of signupForm.lastName().errors(); track $index) {
        <div class="error">{{error.message}}</div>
      }
      <input [formField]="signupForm.email" placeholder="Provide valid Email" type="email" />
      @for (error of signupForm.email().errors(); track $index) {
        <div class="error">{{error.message}}</div>
      }
      <label> Notify By Email:
        <input [formField]="signupForm.notifyByEmail" type="checkbox" />
      </label>
      <button [disabled]="signupForm().submitting() || !signupForm().valid()" type="submit">Save</button>
    </form>
  `,
  providers: [{
    provide: ErrorHandler,
    useClass: HandleError
  }]
})
export class App {
  protected readonly user = signal<User>({
    firstName: '',
    lastName: '',
    email: '',
    notifyByEmail: false,
  });

  protected readonly signupForm = form(this.user, (path) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    apply(path.firstName, nameSchema),
    apply(path.lastName, nameSchema),

    email(path.email, { message: `This is invalid email` }),
    required(path.email, {
      when: ({valueOf}) => valueOf(path.notifyByEmail) === true,
      message: `This field is required...` },
    )
  });

  // protected readonly signupForm = form(this.user, (path) => {
  //   required(path.firstName),
  //   minLength(path.firstName, 3),
  //   required(path.lastName),
  //   minLength(path.lastName, 3),
  //   email(path.email),

  // });

  protected onSubmit(event: Event) {
    submit(this.signupForm, async (form) => {
      try {
        await fetch('https://dummyjson.com/users/ff/2', {
          method: 'PUT',
          body: JSON.stringify(form().value()),
        });
        form().reset();
        // throw Error(`Could not save user with this email...`)
        return undefined;
      } catch(e) {
        return [{
          kind: 'server',
          field: form.email,
          message: (e as Error).message
        }]
      }
    })
    event.preventDefault();
  }
}
