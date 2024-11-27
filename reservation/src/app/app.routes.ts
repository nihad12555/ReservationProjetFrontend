import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige vers login par défaut
  //{ path: '**', redirectTo: 'login' }, // Redirige les chemins invalides vers login
  { path: 'salles', loadChildren: () => import('./salle/salle.module').then(m => m.SalleModule) },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
  },
];


