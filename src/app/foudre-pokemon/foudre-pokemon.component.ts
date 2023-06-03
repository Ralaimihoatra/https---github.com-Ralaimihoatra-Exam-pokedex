import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foudre-pokemon',
  templateUrl: './foudre-pokemon.component.html',
  styleUrls: ['./foudre-pokemon.component.css']
})
export class FoudrePokemonComponent implements OnInit {
  
  foudres = [
    { id : 1, name : 'Salarsen' },
    { id : 2, name : 'Tarsal' },
    { id : 3, name : 'Duralugon' },
    ];

  constructor() { }
  
  ngOnInit() {

  }  
}
