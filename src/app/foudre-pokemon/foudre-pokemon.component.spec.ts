import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoudrePokemonComponent } from './foudre-pokemon.component';

describe('FoudrePokemonComponent', () => {
  let component: FoudrePokemonComponent;
  let fixture: ComponentFixture<FoudrePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoudrePokemonComponent]
    });
    fixture = TestBed.createComponent(FoudrePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
