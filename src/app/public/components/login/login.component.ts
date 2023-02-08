import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
//import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    //private authService: AuthService,
    private router: Router,
    private registerService: RegistrationService
  ) { }

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    /* this.registerService.login(this.loginForm.value)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    }); */

    this.registerService.login(this.loginForm.value).pipe(
      // route to protected/dashboard, if login was successfull
      tap(() => this.router.navigate(['../../protected/dashboard']))
    ).subscribe();

  }

}
