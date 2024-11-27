import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalleComponent } from './salle.component';
import { AjoutSalleComponent } from './ajout-salle/ajout-salle.component';
import { ModifSalleComponent } from './modif-salle/modif-salle.component';

const routes: Routes = [
  { path: '', component: SalleComponent }, // Liste des salles
  { path: 'add', component: AjoutSalleComponent }, // Ajouter une salle
  { path: 'edit/:id', component: ModifSalleComponent }, // Modifier une salle
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalleRoutingModule {}

