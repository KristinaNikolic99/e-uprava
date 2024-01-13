package com.evrtic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.evrtic.models.Vrtic;

@Repository
public interface VrticRepository extends JpaRepository<Vrtic, Long> {

}
