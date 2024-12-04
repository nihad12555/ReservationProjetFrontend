import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Service/Auth/Auth.service';
import { UserDTO, UserLoginDTO } from '../../DTO/UserDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
  export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';
    successMessage: string = '';
  
    constructor(private authService: AuthService,private router: Router) {}
    
    goToRegister() {
      this.router.navigate(['/register']);
    }
  
    onSubmit() {
      const loginData: UserLoginDTO = {
        email: this.email,
        password: this.password,
      };
  
      this.authService.login(loginData).subscribe({
        next: (user: UserDTO) => {
          this.successMessage = `Bienvenue ${user.name}! Connexion réussie.`;
          this.errorMessage = '';
          console.log('Utilisateur connecté:', user);
        },
        error: (error) => {
          this.errorMessage = "Échec de la connexion. Veuillez vérifier vos informations.";
          this.successMessage = '';
          console.error('Erreur lors de la connexion:', error);
        },
      });
    }
  }
  

