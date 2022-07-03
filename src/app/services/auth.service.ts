import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/usuarios';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(usuario: { Email: string; Contrasenia: string; Admin: string; }) {
    return this.http.post<any>(this.URL + '/signup', usuario);
  }

  signInUser(usuario: { Email: string; Contrasenia: string; Admin: string; }) {
    return this.http.post<any>(this.URL + '/signin', usuario);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('admi');
    this.router.navigate(['/formulario']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAdmin(){
    return localStorage.getItem('admi');
  }
}
