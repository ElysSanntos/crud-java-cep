package com.cotuca.controller;

import java.util.List;

import com.cotuca.model.Cadastro;
import com.cotuca.repository.CadastroRepository;

import org.springframework.web.bind.annotation.GetMapping;
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
    
}
