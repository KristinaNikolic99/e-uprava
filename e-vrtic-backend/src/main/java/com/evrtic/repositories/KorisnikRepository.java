package com.evrtic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evrtic.models.Korisnik;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik, Long> {

}
