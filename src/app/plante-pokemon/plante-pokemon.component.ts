import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-plante-pokemon',
  templateUrl: './plante-pokemon.component.html',
  styleUrls: ['./plante-pokemon.component.css']
})
export class PlantePokemonComponent implements OnInit {
  
  plantes = [
    { id : 1, name : 'Florizarre' },
    { id : 2, name : 'Bulbizarre' },
    { id : 3, name : 'Herbizarre' },
    ];

  constructor() { }
  
  ngOnInit() {

  }  
}
