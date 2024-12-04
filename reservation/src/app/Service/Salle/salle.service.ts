import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SalleAjoutDTO, SalleDTO, SalleModifDTO } from '../../DTO/SalleDTO';
import { roomServiceAddress } from '../../environnement';

@Injectable({
  providedIn: 'root',
})
export class SalleService {
  constructor(private http: HttpClient) {}

  /**
   * Récupérer toutes les salles disponibles.
   * @returns Observable<SalleDTO[]>
   */
  getSalles(): Observable<SalleDTO[]> {
    return this.http.get<SalleDTO[]>(roomServiceAddress);
  }

  /**
   * Ajouter une nouvelle salle.
   * @param salle Nouvelle salle à ajouter.
   * @returns Observable<SalleDTO>
   */
  addSalle(salle: SalleAjoutDTO): Observable<SalleDTO> {
    return this.http.post<SalleDTO>(roomServiceAddress, salle);
  }

  /**
   * Modifier une salle existante.
   * @param id ID de la salle à modifier.
   * @param salleModifiee Données mises à jour de la salle.
   * @returns Observable<SalleDTO>
   */
  updateSalle(id: number, salleModifiee: SalleModifDTO): Observable<SalleDTO> {
    const url = `${roomServiceAddress}/${id}`;
    return this.http.put<SalleDTO>(url, salleModifiee);
  }

  /**
   * Supprimer une salle existante.
   * @param id ID de la salle à supprimer.
   * @returns Observable<void>
   */
  deleteSalle(id: number): Observable<void> {
    const url = `${roomServiceAddress}/${id}`;
    return this.http.delete<void>(url);
  }
}

