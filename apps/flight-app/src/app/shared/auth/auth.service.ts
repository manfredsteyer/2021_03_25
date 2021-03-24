import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //userName: string = null;

  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
      //               ^-------------- OIDC
  }

  constructor(private oauthService: OAuthService) {
  }

  login(un: string): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }
}
