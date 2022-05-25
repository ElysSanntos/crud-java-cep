package com.cotuca;

import com.cotuca.model.Cadastro;
import com.cotuca.repository.CadastroRepository;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication


public class CrudSpringApplication {


public static CadastroRepository cadastroRepository;
	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);


}
}

