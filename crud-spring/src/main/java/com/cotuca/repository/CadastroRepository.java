package com.cotuca.repository;

import com.cotuca.Models.Cadastro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  CadastroRepository extends JpaRepository<Cadastro, Long>{

    
    
}
