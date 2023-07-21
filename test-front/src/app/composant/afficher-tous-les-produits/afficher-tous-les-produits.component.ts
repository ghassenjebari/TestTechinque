import { Component, OnInit } from '@angular/core';
import {Produit} from "../../entité/Produit";
import {ProduitApiService} from "../../services/produit-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-tous-les-produits',
  templateUrl: './afficher-tous-les-produits.component.html',
  styleUrls: ['./afficher-tous-les-produits.component.css']
})
export class AfficherTousLesProduitsComponent implements OnInit {
  produits:Produit[]=[];
  colonnesAffiche= ['id', 'nom', 'prix', 'quantite','modifier','supprimer'];


  constructor(private produitApiService:ProduitApiService,private router: Router) { }

  recherche:string='';
  ngOnInit(): void {
    this.chargerTous();
  }

  chargerTous(){
  this.produitApiService.chargerTousLesProduit().subscribe(
    (produits)=> {
      this.produits = produits.filter(
        (produit) =>
          produit.nom.includes(this.recherche)||
          produit.prix.toString().includes(this.recherche)||
          produit.id.toString().includes(this.recherche)||
          produit.quantite.toString().includes(this.recherche)

      );
    });



  }

  chercher():void{

    this.chargerTous();
  }




  modifier(produit:Produit): void {

    this.router.navigate(['/modifier'], { state: { entity: produit } });
  }

  ajouterUnProduit():void{

    this.router.navigate(['/ajouter']);
  }


  supprimer(produit:Produit):void{
    console.log('Produit to delete:',produit);

    this.produitApiService.supprimerUnProduit(produit.id).subscribe(
      () => {
        console.log('Produit supprimé avec ID:', produit.id);


      },
      (erreur) => {
        console.error('erreur', erreur);
        // You can handle errors here, like displaying an error message to the user.
      }
    );
    this.ngOnInit();
  }
}
