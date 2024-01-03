package com.evrtic.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evrtic.models.Korisnik;
import com.evrtic.repositories.KorisnikRepository;

@Service
public class KorisnikService {

	@Autowired
	private KorisnikRepository korisnikRepository;
	
	public List<Korisnik> getAllKorisniks() {
		return korisnikRepository.findAll();
	}
}
