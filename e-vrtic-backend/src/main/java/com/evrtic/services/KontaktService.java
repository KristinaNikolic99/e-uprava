package com.evrtic.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evrtic.dtos.KontaktDto;
import com.evrtic.email.EmailService;
import com.evrtic.models.Kontakt;
import com.evrtic.repositories.KontaktRepository;

@Service
public class KontaktService {

	@Autowired
	private KontaktRepository kontaktRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
    private EmailService emailService;
	
	public Kontakt createKontakt(KontaktDto kontaktDto) {
		Kontakt kontakt = this.modelMapper.map(kontaktDto, Kontakt.class);
		emailService.send(kontakt.getEmail(),
				emailService.emailKontakt(kontakt.getIme(), kontakt.getPrezime(), kontakt.getPoruka()));
		return kontaktRepository.save(kontakt);
	}
}
