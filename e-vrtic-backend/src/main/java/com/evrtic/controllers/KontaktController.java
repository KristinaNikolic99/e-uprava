package com.evrtic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evrtic.dtos.KontaktDto;
import com.evrtic.models.Kontakt;
import com.evrtic.services.KontaktService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class KontaktController {
	
	@Autowired
	private KontaktService kontaktService;
	
	@PostMapping("/contact")
	public ResponseEntity<Kontakt> register(@RequestBody KontaktDto kontaktDto) {
		Kontakt kontakt = kontaktService.createKontakt(kontaktDto);
		if(kontakt == null) {
			return new ResponseEntity<Kontakt>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Kontakt>(kontakt, HttpStatus.CREATED);
	}

}
