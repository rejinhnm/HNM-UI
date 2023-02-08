import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor(
    private router: Router,
    private regService: RegistrationService
  ) { }

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['../../']);
  }

  fileName = '';

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {

      this.fileName = file.name;
      console.log(this.fileName);

      const formData = new FormData();

      formData.append("file", file);
      this.regService.UploadCvService(formData).subscribe;

      /* const upload$ = this.http.post("/api/private/upload/addCv", formData,{
         headers : {
             "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0QG1haWwuY29tIiwiZXhwIjoxNjc1NDE4NDY5LCJpYXQiOjE2NzU0MTM0Njl9.i9dMhSR8yvhZRlhiQAb4G0_YDOzzGdkjYsaS6j5FVqc'}  } );

      upload$.subscribe(); */
    }

  }

}
