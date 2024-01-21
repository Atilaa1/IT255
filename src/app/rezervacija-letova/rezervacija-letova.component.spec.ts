import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaLetovaComponent } from './rezervacija-letova.component';

describe('RezervacijaLetovaComponent', () => {
  let component: RezervacijaLetovaComponent;
  let fixture: ComponentFixture<RezervacijaLetovaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RezervacijaLetovaComponent]
    });
    fixture = TestBed.createComponent(RezervacijaLetovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
