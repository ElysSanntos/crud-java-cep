package com;

import com.cotuca.Model.Cadastro;
import com.repository.CadastroRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}


	@Bean
	CommandLineRunner initDataBase( CadastroRepository cadastroRepository){
		return args ->{
			cadastroRepository.deleteAll();

			Cadastro c = new Cadastro();
			c.setNome("Elys Sanntos");
			c.setCategoria("PF");

			cadastroRepository.save(c);
		};
	}
}
