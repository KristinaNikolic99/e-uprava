package com.evrtic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evrtic.models.Kontakt;

@Repository
public interface KontaktRepository extends JpaRepository<Kontakt, Long>{

}
