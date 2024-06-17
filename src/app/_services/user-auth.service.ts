import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  public setRole(roles: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('roles', roles);
    }
  }

  public getRole(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('roles');
    }
    return null;
  }

  public setToken(jwtToken: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('jwtToken', jwtToken);
    }
  }

  public getToken(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  public clear(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    }
  }

  public isLoggedIn(): boolean {
    return Boolean(this.getRole() && this.getToken());
  }
  
}
