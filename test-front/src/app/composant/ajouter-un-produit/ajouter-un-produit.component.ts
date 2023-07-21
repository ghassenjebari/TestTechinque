import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProduitApiService} from "../../services/produit-api.service";
import {Produit, ProduitA} from "../../entité/Produit";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-un-produit',
  templateUrl: './ajouter-un-produit.component.html',
  styleUrls: ['./ajouter-un-produit.component.css']
})
export class AjouterUnProduitComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private produitapi: ProduitApiService, private router: Router) {
  }

  private produit: ProduitA= { nom: '', prix: 0, quantite: 0 };
   monForm!: FormGroup;

  ngOnInit(): void {

    this.monForm = this.formBuilder.group({
      nom: [''],
      prix: [''],
      quantite: ['']
    });
  }

  ajouter(): void {

    this.produit.nom = this.monForm.get('nom')?.value;
    this.produit.prix = this.monForm.get('prix')?.value;
    this.produit.quantite = this.monForm.get('quantite')?.value;

    this.produitapi.ajouterUnProduit(this.produit).subscribe(
      (produit) => {
        console.log('Produit ajouté:', produit);
        this.router.navigate(['']);

      },
      (erreur) => {
        console.error('erreur:', erreur);
      }
    );


  }
}
