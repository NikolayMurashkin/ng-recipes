import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      //  this.authService.login(email, password).subscribe({
      //    next: (response) => {
      //      console.log(response);
      //      form.reset();
      //    },
      //    error: (error) => {
      //      console.log(error);
      //    },
      //  });
      this.isLoading = false;
    } else {
      this.authService.signUp(email, password).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.isLoading = false;
          this.error = error.error.error.message;
        },
        complete: () => {
          this.isLoading = false;
          console.log('complete');
        },
      });
    }
    form.reset();
  }
}
