import { Component, OnInit } from '@angular/core';

import Foudre from '../types/foudre.type';

@Component({
  selector: 'app-foudre-pokemon',
  templateUrl: './foudre-pokemon.component.html',
  styleUrls: ['./foudre-pokemon.component.css']
})
export class FoudrePokemonComponent implements OnInit {
 
  foudres: Foudre[] = [
    { id : 1, name : 'Salarsen' },
    { id : 2, name : 'Tarsal' },
    { id : 3, name : 'Duralugon' },
    ];

    // Créons une variable dans notre script pour contenir le foudre sélectionné
  selectedFoudre!: Foudre;

  constructor() { }

  // Nous exécuterons une méthode selectHero qui prendra en paramètre le foudre à sélectionner
  selectFoudre(foudre: Foudre) {
    this.selectedFoudre = foudre;
  }
  
  ngOnInit() {

  }  
}
