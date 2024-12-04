import { Component, OnInit } from '@angular/core';
import { SalleDTO } from '../DTO/SalleDTO';
import { CommonModule } from '@angular/common';
import { SalleService } from '../Service/Salle/salle.service';
import { AjoutSalleComponent } from "./ajout-salle/ajout-salle.component";

@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [CommonModule, AjoutSalleComponent],
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})

export class SalleComponent implements OnInit {

  salles: SalleDTO[] = []; 
  errorMessage: string | null = null; 
  showAjoutForm = false;

  constructor(private salleService: SalleService) {} 
  salle: SalleDTO = {
    nom: '',
    capacite: 0,
    equipements: '',
  };

  ngOnInit(): void {
    this.loadSalles(); // Charger les salles au chargement du composant
  }

  
 loadSalles(): void {
    this.salleService.getSalles().subscribe({
      next: (data) => {
        this.salles = data;
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = 'Une erreur est survenue lors du chargement des salles.';
        console.error(err);
      },
    });
  }

  /**
   * Ajouter une salle.
   * @param salle Salle à ajouter.
   */
  onSalleAjoutee(salle: SalleDTO): void {
    this.salleService.addSalle(salle).subscribe({
      next: (nouvelleSalle) => {
        this.salles.push(nouvelleSalle);
        this.showAjoutForm = false; // Masquer le formulaire après ajout
      },
      error: (err) => {
        this.errorMessage = 'Une erreur est survenue lors de l\'ajout de la salle.';
        console.error(err);
      },
    });
  }

  /**
   * Supprimer une salle.
   * @param id ID de la salle à supprimer.
   */
  deleteSalle(id: number | undefined): void {
    if (!id) return;

    if (confirm('Voulez-vous vraiment supprimer cette salle ?')) {
      this.salleService.deleteSalle(id).subscribe({
        next: () => this.loadSalles(),
        error: (err) => {
          this.errorMessage = 'Une erreur est survenue lors de la suppression de la salle.';
          console.error(err);
        },
      });
    }
  }
  /**
   * Modifier une salle (fonctionalité à connecter au composant ModifSalleComponent).
   */
  onModifierSalle(salle: SalleDTO): void {
    // La logique de modification sera définie selon vos besoins.
    this.loadSalles(); // Recharger les salles après modification
  }
}
