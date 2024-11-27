import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'salle',
        loadChildren: () => import('../salle/salle.module').then(m => m.SalleModule) // Lazy load module
      },
      {
        path: 'reservation',
        loadChildren: () => import('../reservation/reservation.module').then(m => m.ReservationModule) // Lazy load module
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
