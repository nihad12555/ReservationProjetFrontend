import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalleAjoutDTO } from '../../DTO/SalleDTO';

@Component({
  selector: 'app-ajout-salle',
  standalone: true,
  imports: [],
  templateUrl: './ajout-salle.component.html',
  styleUrl: './ajout-salle.component.css'
})
export class AjoutSalleComponent {
  @Output() salleAjoutee = new EventEmitter<SalleAjoutDTO>(); // Événement pour transmettre la nouvelle salle au parent
  salleForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.salleForm = this.fb.group({
      nom: ['', Validators.required],
      capacite: [0, [Validators.required, Validators.min(1)]],
      equipements: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.salleForm.invalid) return;

    const nouvelleSalle: SalleAjoutDTO = this.salleForm.value;
    this.salleAjoutee.emit(nouvelleSalle); // Émettre l'événement avec la nouvelle salle
    this.salleForm.reset(); // Réinitialiser le formulaire
  }

}
