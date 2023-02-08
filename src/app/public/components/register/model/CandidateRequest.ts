export class RegisterRequest {

  /**
   *  "firstName":"Rajesh",
    "lastName":"Yadav",
    "email":"rajesh2@gmail.com",
    "password":123,
    "rePassword":123,
    "mobile":9999999,
    "userType":"JobSeeker",
    "candidateProfile":{
        "profileTitle":"Java full-Stack Developer"
    }
   */

  constructor(
    public firstName: string,
    public mobile: number,
    public email: string,
    public userType: string,
    public lastName: string,
    public password: string,
    public rePassword: string,
    public candidateProfile: CandidateProfile
  ) { }

 

  /* public setfirstName(value: string) {
    this.firstName=value;
  }

  public setmobile(value: number) {
  } */
}

export class CandidateProfile {

  constructor(
    public candidateProfile: string
  ) { }

}


export class LoginRequest {

  /* {
  "userName":"Test@mail.com",
  "password":11111
} */

  constructor(
    public candidateProfile: string
  ) { }

}