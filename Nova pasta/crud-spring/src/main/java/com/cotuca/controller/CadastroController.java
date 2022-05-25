package com.cotuca.controller;

import java.util.List;


import com.cotuca.model.Cadastro;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController // Fala para o Spring que esta classe contem um endpoint - uma URL por onde poderemos acessar a nossa API(metodo java Servelet com os verbos- Post-Delete....)
@RequestMapping("/api/cadastros")//O endpoint que ficará exposto
@AllArgsConstructor
public class CadastroController {

    private final CadastroRepository cadastroRepository;

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping // uma forma mais facil de ler
    public @ResponseBody List<Cadastro> lista() {
        return CadastroRepository.findAll();
    }

    //@RequestMapping(method = RequestMethod.POST)
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public CadastroRepository create(@RequestBody Cadastro registro) {
        // System.out.println(course.getName());
        return CadastroRepository.save(registro);
        // return ResponseEntity.status(HttpStatus.CREATED)
        //     .body(courseRepository.save(course));
    }

}