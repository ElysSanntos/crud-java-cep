package com.cotuca;

import com.cotuca.model.Cadastro;
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

	@Bean
	CommandLineRunner initDatabase(CadastroRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Cadastro c = new Cadastro();
			c.setNome("Elisangela Santos");
			c.setCategoria("PF");

			courseRepository.save(c);
		};

	}
}
