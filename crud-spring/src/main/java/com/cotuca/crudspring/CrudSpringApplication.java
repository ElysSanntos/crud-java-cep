package com.cotuca.crudspring;

import com.cotuca.Models.Cadastro;
import com.cotuca.repository.CadastroRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	//Exemplo: Criar um metodo para ser executado qdo o projeto for executado
	//Será removido
	@Bean
	CommandLineRunner initDataBase(CadastroRepository cadastroRepository){
		return args -> {
			cadastroRepository.deleteAll();
			Cadastro c = new Cadastro();
			c.setNome("Elisangela Santos");
			c.setCategoria("PF");

			cadastroRepository.save(c);
		};

	}

}
