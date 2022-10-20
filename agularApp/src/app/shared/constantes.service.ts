import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  constructor() { }

  public static STATUT_CREATION_SAISIE = "SA";
  public static STATUT_CREATION_VALIDE = "VA";
  public static STATUT_CREATION_ANNULE = "AN";

}
