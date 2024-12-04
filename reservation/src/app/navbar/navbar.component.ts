import { Component } from '@angular/core';
import { AuthService } from '../Service/Auth/Auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
constructor(private AuthService: AuthService,private router:Router) {}

goToReservation() {
  this.router.navigate(['/reservation']);
}
goToSalle() {
  this.router.navigate(['/salles']);
}

logout() {
  this.AuthService.logout();
}

}
