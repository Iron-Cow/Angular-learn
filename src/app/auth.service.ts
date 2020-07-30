import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
// @ts-ignore
export class AuthService {
  private IsAuth = false;

  login(): void{
    this.IsAuth = true;
  }

  logout(): void{
    this.IsAuth = false;
  }

  isAuthenticated(): Promise<boolean>{
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.IsAuth);
      }, 1000);
    });
  }

}
