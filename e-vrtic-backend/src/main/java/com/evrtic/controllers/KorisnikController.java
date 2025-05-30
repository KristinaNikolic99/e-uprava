package com.evrtic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.evrtic.dtos.KorisnikDto;
import com.evrtic.models.Korisnik;
import com.evrtic.services.KorisnikService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class KorisnikController {

	@Autowired
	private KorisnikService korisnikService;
	
	@GetMapping("/korisnici")
	public ResponseEntity<List<Korisnik>> getAllKorisniks() {
		return new ResponseEntity<List<Korisnik>>(korisnikService.getAllKorisniks(), HttpStatus.OK);
	}
	
	@PostMapping("/register")
	public ResponseEntity<Korisnik> register(@RequestBody KorisnikDto korisnikDto) {
		Korisnik korisnik = korisnikService.register(korisnikDto);
		if(korisnik == null) {
			return new ResponseEntity<Korisnik>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Korisnik>(korisnik, HttpStatus.CREATED);
	}
	
	@GetMapping("/logIn")
	public ResponseEntity<Korisnik> logIn(@RequestParam String username, @RequestParam String password) {
		Korisnik korisnik = korisnikService.logIn(username, password);
		if (korisnik == null) {
			return new ResponseEntity<Korisnik>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Korisnik>(korisnik, HttpStatus.OK);
	}
	
	@GetMapping("/confirm")
    public ModelAndView confirmEmailToken(@RequestParam String token){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("message",korisnikService.confirmEmailToken(token));
        modelAndView.addObject("link","http://localhost:3000/login");
        modelAndView.setViewName("verifikacija");
        return modelAndView;
    }
}
