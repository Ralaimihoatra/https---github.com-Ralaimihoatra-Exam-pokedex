import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feu-pokemon',
  templateUrl: './feu-pokemon.component.html',
  styleUrls: ['./feu-pokemon.component.css']
})
export class FeuPokemonComponent implements OnInit {

  feus = [
    { id : 1, name : 'Arcanin' },
    { id : 2, name : 'Aflamanoir' },
    { id : 3, name : 'Goupix' },
    ];
    
  constructor() { }

  ngOnInit() {
  }  
}
