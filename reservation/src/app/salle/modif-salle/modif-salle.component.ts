import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalleModifDTO } from '../../DTO/SalleDTO';

@Component({
  selector: 'app-modif-salle',
  standalone: true,
  imports: [],
  templateUrl: './modif-salle.component.html',
  styleUrl: './modif-salle.component.css'
})
export class ModifSalleComponent implements OnInit {
  @Input() salle!: SalleModifDTO; // Salle à modifier passée par le composant parent
  @Output() salleModifiee = new EventEmitter<SalleModifDTO>(); // Événement pour transmettre la salle modifiée
  modifSalleForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec les données de la salle
    this.modifSalleForm = this.fb.group({
      nom: [this.salle.nom, Validators.required],
      capacite: [this.salle.capacite, [Validators.required, Validators.min(1)]],
      equipements: [this.salle.equipements, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.modifSalleForm.invalid) return;

    const salleModifiee: SalleModifDTO = this.modifSalleForm.value;
    this.salleModifiee.emit(salleModifiee); // Émettre l'événement avec la salle modifiée
  }

}
