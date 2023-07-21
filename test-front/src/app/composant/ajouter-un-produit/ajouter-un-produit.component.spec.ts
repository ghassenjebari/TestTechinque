import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnProduitComponent } from './ajouter-un-produit.component';

describe('AjouterUnProduitComponent', () => {
  let component: AjouterUnProduitComponent;
  let fixture: ComponentFixture<AjouterUnProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUnProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
