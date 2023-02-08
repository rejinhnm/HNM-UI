
/*
Interface for the Refresh Token (can look different, based on your backend api)
*/
/* export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
} */

/*
Interface for the Login Response (can look different, based on your backend api)
*/
/* export interface LoginResponse {
  accessToken: string;
  refreshToken: RefreshToken;
  tokenType: string;
} */

/*
Interface for the Login Request (can look different, based on your backend api)
*/
export interface LoginRequest {
  userName: string;
  password: string;
}

/*
Interface for the Register Request (can look different, based on your backend api)
*/
/* export interface RegisterRequest {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
} */

/*
Interface for the Register Response (can look different, based on your backend api)
*/
export interface LoginResponse {
  responseClassType: ResponseClassType;
  message: string;
  messageType: string;
}

export interface ResponseClassType{
  id: string;
  accessToken:string;
  refreshToken: string;
  accessTokenExpiration: string;
  refreshTokenExpiration:string;
}