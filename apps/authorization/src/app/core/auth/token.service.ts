import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  #ACCESS_KEY = 'access_token';
  #REFRESH_KEY = 'refresh_token';

  getAccessToken(): string {
    return localStorage.getItem(this.#ACCESS_KEY) ?? '';
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.#REFRESH_KEY) ?? '';
  }

  setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem(this.#ACCESS_KEY, accessToken);
    localStorage.setItem(this.#REFRESH_KEY, refreshToken);
  }

  clearTokens() {
    localStorage.removeItem(this.#ACCESS_KEY);
    localStorage.removeItem(this.#REFRESH_KEY);
  }
}
