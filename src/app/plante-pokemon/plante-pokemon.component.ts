import { Component , OnInit} from '@angular/core';

import Plante from '../types/plante.type';

@Component({
  selector: 'app-plante-pokemon',
  templateUrl: './plante-pokemon.component.html',
  styleUrls: ['./plante-pokemon.component.css']
})
export class PlantePokemonComponent implements OnInit {

  plantes: Plante[] = [
    { id : 1, name : 'Florizarre' },
    { id : 2, name : 'Bulbizarre' },
    { id : 3, name : 'Herbizarre' },
    ];
    
// Créons une variable dans notre script pour contenir la plante sélectionné
  selectedPlante!: Plante;

  constructor() { }

  // Nous exécuterons une méthode selectHero qui prendra en paramètre la plante à sélectionner
  selectPlante(plante: Plante) {
    this.selectedPlante = plante;
  }
  
  ngOnInit() {

  }  
}
