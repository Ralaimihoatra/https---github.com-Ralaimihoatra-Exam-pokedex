import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantePokemonComponent } from './plante-pokemon.component';

describe('PlantePokemonComponent', () => {
  let component: PlantePokemonComponent;
  let fixture: ComponentFixture<PlantePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantePokemonComponent]
    });
    fixture = TestBed.createComponent(PlantePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
