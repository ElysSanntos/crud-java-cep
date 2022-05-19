package com.cotuca.Controller;

import java.util.List;

import com.cotuca.Models.Cadastro;
import com.cotuca.repository.CadastroRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController //Fala para o Spring que esta classe contém um endpoint(JavaServelet)
@RequestMapping ("/api/cadastros")
@AllArgsConstructor //Cria os contrutores de forma automatica
public class CadastrosController {

    private final CadastroRepository cadastroRepository;
   
      //Metodo que retorna uma lista
    @GetMapping //Nosso modelo - representa a lista de objetos que vamos retornar
    public List<Cadastro> listaCadastros(){
        return cadastroRepository.findAll();
    }
}
