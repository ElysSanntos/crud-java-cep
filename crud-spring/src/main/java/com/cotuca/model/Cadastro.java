package com.cotuca.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data 
@Entity
//@Table(name = "cadastros")
public class Cadastro {

    @Id // Chave primaria
    @GeneratedValue(strategy = GenerationType.AUTO ) // Gera os ids de forma sequencial e automatica
    @JsonProperty("_id") //Alternativa ao DTO(Data Transform Object)
    private Long id;

    @Column(length = 200, nullable = false)//não aceita valores null
    private String nome;

    @Column(length = 4, nullable = false )
    private String categoria;
    
}
