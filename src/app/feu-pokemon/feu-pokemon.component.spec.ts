import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuPokemonComponent } from './feu-pokemon.component';

describe('FeuPokemonComponent', () => {
  let component: FeuPokemonComponent;
  let fixture: ComponentFixture<FeuPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeuPokemonComponent]
    });
    fixture = TestBed.createComponent(FeuPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
