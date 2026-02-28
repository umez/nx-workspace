import {  HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenService } from "./token.service";
import { AuthService } from "./auth.service";
import { catchError, switchMap, throwError } from "rxjs";
import e from "express";

export const  authInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const token = tokenService.getAccessToken()
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap(() => {
            const newToken = tokenService.getAccessToken();
            const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
            return next(retryReq);
          })
        )
      }
      return throwError(() => error);
    })
  );
}
