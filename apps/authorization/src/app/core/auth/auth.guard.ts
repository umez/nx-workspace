import { CanActivateFn, Router } from "@angular/router";
import { AuthStore } from "./auth.store";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = () => {

  const store = inject(AuthStore);
  const route = inject(Router)

  if(!store.isAuthenticated) {
    route.navigate(['auth/login'])
    return false
  }

  return true;
}
