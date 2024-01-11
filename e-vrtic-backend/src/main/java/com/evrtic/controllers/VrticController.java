package com.evrtic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evrtic.models.Vrtic;
import com.evrtic.services.VrticService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class VrticController {
	
	@Autowired
	private VrticService vrticService;
	
	@GetMapping("/vrtici")
	public ResponseEntity<List<Vrtic>> getAllVrtics(){
		return new ResponseEntity<List<Vrtic>>(vrticService.getAllVrtics(), HttpStatus.OK);
	}

}
