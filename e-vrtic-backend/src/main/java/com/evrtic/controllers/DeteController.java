package com.evrtic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.evrtic.dtos.DeteDto;
import com.evrtic.models.Dete;
import com.evrtic.services.DeteService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DeteController {

	@Autowired
	private DeteService deteService;
	
	@PostMapping("register_child")
	public ResponseEntity<Dete> registerChild(@RequestBody DeteDto deteDto) {
		Dete dete = deteService.registerChild(deteDto);
		if(dete == null) {
			return new ResponseEntity<Dete>(HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<Dete>(HttpStatus.CREATED);
	}
}
