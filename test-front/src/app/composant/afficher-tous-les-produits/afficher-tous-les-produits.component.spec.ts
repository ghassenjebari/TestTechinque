import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTousLesProduitsComponent } from './afficher-tous-les-produits.component';

describe('AfficherTousLesProduitsComponent', () => {
  let component: AfficherTousLesProduitsComponent;
  let fixture: ComponentFixture<AfficherTousLesProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTousLesProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTousLesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
