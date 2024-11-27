import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reservation';
  constructor(private router: Router) {}

  isAuthPage(): boolean {
    const authRoutes = ['/login', '/register']; // Les routes sans navbar
    return authRoutes.includes(this.router.url);
  }
}
