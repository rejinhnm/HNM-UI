import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../custom-validator';
import { Router } from '@angular/router';
import { CandidateProfile, RegisterRequest } from './model/CandidateRequest';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    contact: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [])
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )
  constructor(
    private router: Router, 
    private regService: RegistrationService
  ) { }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    let first_name: string =this.registerForm.get('firstname')?.value!;
    let last_name: string =this.registerForm.get('lastname')?.value!;
    let email: string =this.registerForm.get('email')?.value!;
    let mobile: number =this.registerForm.get('contact')?.value!;
    let password: string =this.registerForm.get('password')?.value!;
    let passwordConfirm: string =this.registerForm.get('passwordConfirm')?.value!;
    let status: string=this.registerForm.get('status')?.value!;

    console.log(status);
    
    let request=new RegisterRequest(first_name,mobile, email,'JobSeeker',
    last_name,password,passwordConfirm,new  CandidateProfile('jobSeeker'));

    console.log(request);

    this.regService.registerCandidate(request)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  } 

}
