import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';  // Importation de FullCalendar
import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,  
    ReservationRoutingModule  
  ],
})
export class ReservationModule { }
