package com.evrtic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evrtic.models.Dete;

@Repository
public interface DeteRepository extends JpaRepository<Dete, Long>{
	Dete findByJmbg(String jmbg);
}
