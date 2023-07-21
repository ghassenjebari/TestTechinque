import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModifierUnProduitComponent} from "./composant/modifier-un-produit/modifier-un-produit.component";
import {
  AfficherTousLesProduitsComponent
} from "./composant/afficher-tous-les-produits/afficher-tous-les-produits.component";
import {AjouterUnProduitComponent} from "./composant/ajouter-un-produit/ajouter-un-produit.component";



const routes: Routes = [
  { path: '', component:AfficherTousLesProduitsComponent},
  {path:'modifier',component:ModifierUnProduitComponent},
  {path:'ajouter',component:AjouterUnProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
