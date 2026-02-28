import { computed, signal } from "@angular/core";

export class AuthStore {
  private readonly _user = signal<string | null>(null);
  readonly user = this._user.asReadonly();
  readonly isAuthenticated = computed(() => !!this._user())

  setUser(user: string | null) {
    this._user.set(user);
  }
  clear() {
    this._user.set(null);
  }
}
