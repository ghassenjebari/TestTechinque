package com.example.test.technique.controller;

import com.example.test.technique.entity.Produit;
import com.example.test.technique.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/produit")
public class ProduitController {
    @Autowired
    ProduitService produitService;


    @GetMapping("/tous")
    public List<Produit> retournerTousLesProduits(){
        return produitService.retournerTousLesProduits();
    }

    @PostMapping("/ajouter")
    public ResponseEntity<Produit> ajouterProduit(@RequestBody Produit produit){
        Produit produit1=produitService.ajouterUnProduit(produit);
        return new ResponseEntity<>(produit1, HttpStatus.OK);
    }


    @DeleteMapping("/supprimer/{id}")
    public ResponseEntity<String> supprimerUnProduit(@PathVariable Long id) {
        try {
            produitService.supprimerUnProduit(id);
            return ResponseEntity.ok("Entité " + id + " est supprimé.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
