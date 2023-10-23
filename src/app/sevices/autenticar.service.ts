import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  private user: any;

  constructor() { 
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
  }

  login(usuario: string, password: string) : boolean {
    if (this.user && this.user.usuario === usuario && this.user.password == password) {
      return true;
    } 
      return false;
  }
    
}
