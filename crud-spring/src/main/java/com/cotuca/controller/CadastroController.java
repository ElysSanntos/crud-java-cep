package com.cotuca.controller;

import java.util.List;

import com.cotuca.model.Cadastro;
import com.cotuca.repository.CadastroRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cadastros")
@AllArgsConstructor
public class CadastroController {
    private final CadastroRepository cadastroRepository;

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public @ResponseBody List<Cadastro> list() {
        return cadastroRepository.findAll();
    }

    //@RequestMapping(method = RequestMethod.POST)
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Cadastro create(@RequestBody Cadastro cadastro) {
        // System.out.println(course.getNome());
        return cadastroRepository.save(cadastro);
        // return ResponseEntity.status(HttpStatus.CREATED)
        //     .body(cadastroRepository.save(cadastro));
    }

    
}
