import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeuPokemonComponent } from './feu-pokemon/feu-pokemon.component';
import { FoudrePokemonComponent } from './foudre-pokemon/foudre-pokemon.component';
import { PlantePokemonComponent } from './plante-pokemon/plante-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    FeuPokemonComponent, // cette ligne a été ajoutée suite à notre commande
    FoudrePokemonComponent,
    PlantePokemonComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
