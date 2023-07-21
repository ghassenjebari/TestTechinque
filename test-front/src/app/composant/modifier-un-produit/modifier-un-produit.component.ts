import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Produit} from "../../entité/Produit";
import {ProduitApiService} from "../../services/produit-api.service";

@Component({
  selector: 'app-modifier-un-produit',
  templateUrl: './modifier-un-produit.component.html',
  styleUrls: ['./modifier-un-produit.component.css']
})
export class ModifierUnProduitComponent implements OnInit {

  constructor( private router: Router,private formBuilder: FormBuilder,private produitapi:ProduitApiService) {
    // @ts-ignore
    console.log(this.router.getCurrentNavigation().extras.state.entity);
  // @ts-ignore
    this.produit=this.router.getCurrentNavigation().extras.state.entity;
  }

  monForm!: FormGroup ;
  produit!:Produit;

  ngOnInit(): void {

      this.monForm = this.formBuilder.group({
        nom: [this.produit.nom],
        prix: [this.produit.prix],
        quantite: [this.produit.quantite]
      });

  }

  modifier():void{

  this.produit.nom=this.monForm.get('nom')?.value;
  this.produit.prix=this.monForm.get('prix')?.value;
  this.produit.quantite=this.monForm.get('quantite')?.value;

    this.produitapi.ajouterUnProduit(this.produit).subscribe(
      (produit) => {
        console.log('Produit modifié:', produit);
        this.router.navigate(['']);

      },
      (erreur) => {
        console.error('erreur:', erreur);
      }
    );




  }

}
