package com.cotuca.model;



@Data // equivalente aos getteres e setters
@entity
//@Table(name = "Cadastros")
public class Cadastro {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String nome;

    @Column(length = 10, nullable = false)
    private String categoria;

}