import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reservationServiceAddress } from '../../environnement';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  // Méthode pour réserver une salle
  reserveRoom(reservation: any): Observable<any> {
    // Utilisation de l'adresse définie dans address.ts
    return this.http.post<any>(reservationServiceAddress, reservation);
  }

  // Méthode pour récupérer les réservations existantes
  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(reservationServiceAddress);
  }

  // Méthode pour annuler une réservation
  cancelReservation(reservationId: number): Observable<any> {
    return this.http.delete<any>(`${reservationServiceAddress}/${reservationId}`);
  }
}
