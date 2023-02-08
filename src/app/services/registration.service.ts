import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LOCALSTORAGE_TOKEN_KEY } from '../app.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterRequest } from '../public/components/register/model/CandidateRequest';
import { LoginRequest, LoginResponse } from '../public/interfaces';

@Injectable()
export class RegistrationService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar) {

   // this.baseUrl = 'http://localhost:9091/api/public/users';
    this.baseUrl = '/api/public/users';
  }

  registerCandidate(registerRequest: RegisterRequest): Observable<any> {

    //const registerUrl='${this.baseUrl}/public/users'

    return this.http.post(this.baseUrl, registerRequest)

  }

  login(loginRequest: LoginRequest): Observable<any> {

    //const registerUrl='${this.baseUrl}/public/users'
    const loginUrl = '/api/public/users/authenticate';

    //return this.http.post(loginUrl, loginRequest);
    return this.http.post<LoginResponse>(loginUrl, loginRequest).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res?.responseClassType?.accessToken)),
      tap(() => this.snackbar.open('Login Successfull', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      }))
    );

  }

  UploadCvService(formdata: FormData): Observable<any> {

    const url = '/api/private/upload/addCv';
    return this.http.post(url, formdata, {
      headers: {
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0QG1haWwuY29tIiwiZXhwIjoxNjc1NDE4NDY5LCJpYXQiOjE2NzU0MTM0Njl9.i9dMhSR8yvhZRlhiQAb4G0_YDOzzGdkjYsaS6j5FVqc'
      }
    }
    ).pipe(
      tap(() => this.snackbar.open('CV Uploaded', 'Close', {
        duration: 20000, horizontalPosition: 'right', verticalPosition: 'top'
      }))
    );
  }
}
