package com.evrtic.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.evrtic.dtos.KorisnikDto;
import com.evrtic.models.Korisnik;
import com.evrtic.models.TipKorisnika;
import com.evrtic.repositories.KorisnikRepository;

@Service
public class KorisnikService {

	@Autowired
	private KorisnikRepository korisnikRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<Korisnik> getAllKorisniks() {
		return korisnikRepository.findAll();
	}
	
	public Korisnik register(KorisnikDto korisnikDto) {
		Korisnik korisnik = this.modelMapper.map(korisnikDto, Korisnik.class);
		korisnik.setPassword(passwordEncoder.encode(korisnik.getPassword()));
		korisnik.setTipKorisnika(TipKorisnika.Roditelj);
		if (korisnikRepository.findByUsername(korisnik.getUsername()) != null) {
			return null;
		}
		return korisnikRepository.save(korisnik);
	}
	
	public Korisnik logIn(String username, String password) {
		Korisnik korisnik = korisnikRepository.findByUsername(username);
		if (korisnik != null && passwordEncoder.matches(password, korisnik.getPassword())) {
			return korisnik;
		}
		return null;
	}
	
	 
}
