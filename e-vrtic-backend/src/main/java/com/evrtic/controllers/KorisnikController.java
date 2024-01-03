package com.evrtic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evrtic.models.Korisnik;
import com.evrtic.services.KorisnikService;

@RestController
@RequestMapping("/api")
public class KorisnikController {

	@Autowired
	private KorisnikService korisnikService;
	
	@GetMapping("/korisnici")
	public ResponseEntity<List<Korisnik>> getAllKorisniks() {
		return new ResponseEntity<List<Korisnik>>(korisnikService.getAllKorisniks(), HttpStatus.OK);
	}
}
