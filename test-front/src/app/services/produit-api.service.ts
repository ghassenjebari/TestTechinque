import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit, ProduitA} from "../entité/Produit";


@Injectable({
  providedIn: 'root'
})
export class ProduitApiService {
  private baseUrl = 'http://localhost:8081/produit';

  constructor(private http: HttpClient) { }

  chargerTousLesProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.baseUrl}/tous`)
  }

  ajouterUnProduit(produit:ProduitA):Observable<ProduitA>{

    return this.http.post<ProduitA>(`${this.baseUrl}/ajouter`,produit)
  }

  supprimerUnProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/supprimer/${id}`);

  }
}
