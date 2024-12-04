import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Service/Auth/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ 
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
  export class RegisterComponent {
    name: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    errorMessage: string = '';
  successMessage: string = '';
  
  constructor(private authService: AuthService,private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
    }
  
    onSubmit() {
    if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Les mots de passe ne correspondent pas.';
        this.successMessage = '';
        return;
    }

    // Appel direct avec les propriétés liées au modèle
    this.authService.register({
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
    }).subscribe({
        next: (user) => {
            this.successMessage = `Compte créé avec succès pour ${user.name}.`;
            this.errorMessage = '';
            console.log('Utilisateur enregistré:', user);
        },
        error: (error) => {
          this.errorMessage = "Échec de l'inscription. Veuillez réessayer.";
          this.successMessage = '';
          console.error('Erreur lors de l\'inscription:', error);
        },
      });
    }
  }
  

