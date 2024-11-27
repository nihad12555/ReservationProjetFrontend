import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, 
    RouterModule,
    DashboardRoutingModule 
  ],
  
})
export class DashboardModule {}
