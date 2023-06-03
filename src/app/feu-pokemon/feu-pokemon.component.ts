import { Component, OnInit } from '@angular/core';

import Feu from '../types/feu.type';

@Component({
  selector: 'app-feu-pokemon',
  templateUrl: './feu-pokemon.component.html',
  styleUrls: ['./feu-pokemon.component.css']
})
export class FeuPokemonComponent implements OnInit {

  feus: Feu[]  = [
    { id : 1, name : 'Arcanin' },
    { id : 2, name : 'Aflamanoir' },
    { id : 3, name : 'Goupix' },
    ];

// Créons une variable dans notre script pour contenir le feu sélectionné
selectedFeu!: Feu;

  constructor() { }
  
// Nous exécuterons une méthode selectHero qui prendra en paramètre le feu à sélectionner
  selectFeu(feu: Feu) {
    this.selectedFeu = feu;
  }

  ngOnInit() {
  }  
}
