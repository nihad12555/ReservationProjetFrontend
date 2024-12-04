import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';  // Plugin pour l'affichage en grille mensuelle
import interactionPlugin from '@fullcalendar/interaction'; 
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin pou
import { ReservationService } from '../Service/Reservation/Reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    editable: true, // Permet de déplacer les événements
    selectable: true, // Permet de sélectionner une plage horaire
    events: [], // Les événements seront chargés dynamiquement
    select: this.handleDateSelect.bind(this), // Gère la sélection de plages
    eventClick: this.handleEventClick.bind(this), // Gère le clic sur un événement
  };

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.loadReservations();
  }

loadReservations() {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.calendarOptions.events = reservations.map((reservation) => ({
        id: reservation.id,
        title: `Salle ${reservation.roomId}`,
        start: reservation.startTime,
        end: reservation.endTime,
      }));
    });
  }

  handleDateSelect(selectionInfo: any) {
    const title = prompt('Entrez le numéro de salle pour réserver :');
    if (title) {
      const reservation = {
        roomId: Number(title),
        userId: 1, 
        startTime: selectionInfo.startStr,
        endTime: selectionInfo.endStr,
      };

      this.reservationService.reserveRoom(reservation).subscribe(
        () => {
          alert('Réservation réussie');
          this.loadReservations(); // Recharge les événements après réservation
        },
        (error) => alert('Erreur lors de la réservation')
      );
    }
  }

  handleEventClick(clickInfo: any) {
    if (confirm('Voulez-vous annuler cette réservation ?')) {
      const reservationId = clickInfo.event.id;
      this.reservationService.cancelReservation(reservationId).subscribe(
        () => {
          alert('Réservation annulée');
          clickInfo.event.remove(); // Retirer l'événement du calendrier
        },
        (error) => alert('Erreur lors de l\'annulation')
      );
    }
  }
  }



