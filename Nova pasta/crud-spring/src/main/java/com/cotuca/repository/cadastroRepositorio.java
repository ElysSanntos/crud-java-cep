package com.cotuca.repository;

import com.cotuca.model.Cadastro;


import org.springframework.stereotype.Repository;

public interface cadastroRepositorio extends JpaRepository<Cadastro,Long> {
    
}
