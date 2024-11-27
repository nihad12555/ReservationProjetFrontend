import { Component, OnInit } from '@angular/core';
import { AjoutSalleComponent } from "./ajout-salle/ajout-salle.component";
import { SalleDTO } from '../DTO/SalleDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})

export class SalleComponent implements OnInit {

onSalleAjoutee() {

}

onModifierSalle(_t14: any) {

}


  salles: SalleDTO[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    this.loadSalles();
  }

  loadSalles(): void {
    //this.salleService.getSalles().subscribe((data) => {
      //this.salles = data;
    //});
  }

  deleteSalle(id: number | undefined): void {
    //if (confirm('Voulez-vous vraiment supprimer cette salle ?')) {
      //this.salleService.deleteSalle(id).subscribe(() => {
        //this.loadSalles();
      //});
   // }
  }
}
