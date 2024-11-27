import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  salleStats = {
    available: 0,
    occupied: 0,
  };

  reservationStats = {
    today: 0,
    total: 0,
  };

  recentActivities: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadSalleStats();
    this.loadReservationStats();
    this.loadRecentActivities();
  }

  loadSalleStats() {
    // Exemple de données statiques, remplacez par un appel API
    this.salleStats = {
      available: 5,
      occupied: 2,
    };
  }

  loadReservationStats() {
    // Exemple de données statiques, remplacez par un appel API
    this.reservationStats = {
      today: 3,
      total: 42,
    };
  }

  loadRecentActivities() {
    // Exemple de données statiques, remplacez par un appel API
    this.recentActivities = [
      'Réservation de la salle A',
      'Annulation de la salle B',
      'Réservation de la salle C',
    ];
  }

}
