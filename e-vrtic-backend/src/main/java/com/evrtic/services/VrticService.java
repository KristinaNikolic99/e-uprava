package com.evrtic.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evrtic.models.Vrtic;
import com.evrtic.repositories.VrticRepository;

@Service
public class VrticService {
	
	@Autowired
	private VrticRepository vrticRepository;
	
	public List<Vrtic> getAllVrtics(){
		return vrticRepository.findAll();
	}

}
