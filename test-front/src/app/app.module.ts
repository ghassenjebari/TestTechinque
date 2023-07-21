import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './composant/app.component';
import { AfficherTousLesProduitsComponent } from './composant/afficher-tous-les-produits/afficher-tous-les-produits.component';
import { AjouterUnProduitComponent } from './composant/ajouter-un-produit/ajouter-un-produit.component';
import { ModifierUnProduitComponent } from './composant/modifier-un-produit/modifier-un-produit.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AfficherTousLesProduitsComponent,
    AjouterUnProduitComponent,
    ModifierUnProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    , MatTableModule, MatIconModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
