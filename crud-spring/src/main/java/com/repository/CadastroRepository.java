package com.repository;

import com.cotuca.Model.Cadastro;

import org.springframework.data.jpa.repository.JpaRepository;



public interface CadastroRepository extends JpaRepository<Cadastro, Long> {
    
}
