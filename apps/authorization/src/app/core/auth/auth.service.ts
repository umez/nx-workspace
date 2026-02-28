import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginRequest } from "./auth.model";
import { tap } from "rxjs";
import { TokenService } from "./token.service";
import { AuthStore } from "./auth.store";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);
  private store = inject(AuthStore)

  login(payload: LoginRequest) {
    return this.http.post('/api/auth/login', payload).pipe(
      tap( res => {
        const { accessToken, refreshToken } = res as { accessToken: string, refreshToken: string };
        this.tokenService.setTokens(accessToken, refreshToken);
        this.store.setUser(payload.username);
      })
    )
  }

  refreshToken() {
    const refreshToken = this.tokenService.getRefreshToken();
    return this.http.post('/api/auth/refresh', { refreshToken }).pipe(
      tap( res => {
        const { accessToken, refreshToken } = res as { accessToken: string, refreshToken: string };
        this.tokenService.setTokens(accessToken, refreshToken);
      })
    )
  }

  logout() {
    this.tokenService.clearTokens();
    this.store.clear();
  }
}
