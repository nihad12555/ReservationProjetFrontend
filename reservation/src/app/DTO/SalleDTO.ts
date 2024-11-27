interface SalleDTO {
    id?: number; // Facultatif pour les nouvelles salles
    nom: string;
    capacite: number;
    equipements: string;
  }
   interface SalleAjoutDTO {
    nom: string;
    capacite: number;
    equipements: string;
  }
   interface SalleModifDTO {
    nom: string;
    capacite: number;
    equipements: string;
  }
  export {
    SalleDTO,
    SalleAjoutDTO,
    SalleModifDTO,
  }