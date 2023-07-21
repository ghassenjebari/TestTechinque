package com.example.test.technique.service;

import com.example.test.technique.entity.Produit;
import com.example.test.technique.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
@Service
public class ProduitService {

    @Autowired
    ProduitRepository produitRepository;



    public List<Produit> retournerTousLesProduits(){
        return produitRepository.findAll();
    }


    public Produit ajouterUnProduit(Produit produit){
        return produitRepository.save(produit);
    }


    public void supprimerUnProduit(long produitId){
        produitRepository.deleteById(produitId);
    }

}
