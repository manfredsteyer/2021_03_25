import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string = null;

  login(un: string): void {
    this.userName = un;
  }

  logout(): void {
    this.userName = null;
  }
}
