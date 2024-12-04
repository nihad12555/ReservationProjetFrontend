import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userServiceAddress } from '../../environnement';
import { Observable } from 'rxjs';
import { UserDTO, UserLoginDTO, UserRegisterDTO } from '../../DTO/UserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http: HttpClient) { }
 

  /**
   * Authentifier un utilisateur.
   * @param loginData Données de connexion.
   * @returns Observable<UserDTO>
   */
  login(loginData: UserLoginDTO): Observable<UserDTO> {
    const url = `${userServiceAddress}/login`;
    return this.http.post<UserDTO>(url, loginData);
  }

  /**
   * Inscrire un nouvel utilisateur.
   * @param registerData Données d'inscription.
   * @returns Observable<UserDTO>
   */
  register(registerData: UserRegisterDTO): Observable<UserDTO> {
    const url = `${userServiceAddress}/register`;
    return this.http.post<UserDTO>(url, registerData);
  }

  // Méthode de déconnexion
  logout() {
    // Supprimer le token du localStorage ou sessionStorage
    localStorage.removeItem('token');
    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
