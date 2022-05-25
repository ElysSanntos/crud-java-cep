package com.cotuca.controller;

import java.util.List;

import com.cotuca.model.Cadastro;
import com.cotuca.repository.CadastroRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cadastros")//http://localhost:8080/api/cadastros
@AllArgsConstructor
public class CadastroController {

    private final CadastroRepository cadastroRepositorio;

    @GetMapping
    public List<Cadastro>lista(){
        return cadastroRepositorio.findAll();
    }

    @PostMapping
    public ResponseEntity<Cadastro> create(@RequestBody Cadastro registro){
        //System.out.println(registro.getNome());
        //return cadastroRepositorio.save(registro);
        return ResponseEntity.status(HttpStatus.CREATED)
        .body(cadastroRepositorio.save(registro));

    }
    
}
