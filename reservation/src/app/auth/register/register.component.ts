import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  
    onSubmit() {
      if (this.password !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Logique pour s'inscrire (Appeler une API backend)
    }
  }
  

