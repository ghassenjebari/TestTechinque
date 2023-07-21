import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUnProduitComponent } from './modifier-un-produit.component';

describe('ModifierUnProduitComponent', () => {
  let component: ModifierUnProduitComponent;
  let fixture: ComponentFixture<ModifierUnProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUnProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUnProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
