package com.cotuca.controller;

import java.util.List;

import com.cotuca.Model.Cadastro;
import com.repository.CadastroRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController  //Fala para o Spring que esta classe contem uma url que vamos acessar nossa API
@RequestMapping("/api/cadastros")//Qual o endpoint ficará exposto
@AllArgsConstructor // Gera os getters e setters no contrutor
public class CadastrosController{

   
    private final CadastroRepository cadastroRepository; // final para garantir que a instancia não será alterada

    @GetMapping
    public @ResponseBody List<Cadastro> lista(){
        return cadastroRepository.findAll();//findAll() faz o select* sem where
    }

    //Método para criar o cadastro no BD - Chamado apenas quando utilizar o verbo http POST
    //@RequestMapping(method = RequestMethod.
    //POST)
    @PostMapping // forma automatica
    @ResponseStatus(code = HttpStatus.CREATED )
    public Cadastro create(@RequestBody Cadastro registro){
        return cadastroRepository.save(registro);
        // return ResponseEntity.status(HttpStatus.CREATED)
        // .body(cadastroRepository.save(registro));

    }
}