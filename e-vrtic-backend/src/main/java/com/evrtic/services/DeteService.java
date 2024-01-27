package com.evrtic.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evrtic.dtos.DeteDto;
import com.evrtic.email.EmailService;
import com.evrtic.models.Dete;
import com.evrtic.models.Korisnik;
import com.evrtic.models.Status;
import com.evrtic.models.Vrtic;
import com.evrtic.repositories.DeteRepository;
import com.evrtic.repositories.KorisnikRepository;
import com.evrtic.repositories.VrticRepository;

@Service
public class DeteService {

	@Autowired
	private DeteRepository deteRepository;
	
	@Autowired
	private KorisnikRepository korisnikRepository;
	
	@Autowired
	private VrticRepository vrticRepository;
	
	@Autowired
    private EmailService emailService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public Dete registerChild(DeteDto deteDto) {
		Dete dete = this.modelMapper.map(deteDto, Dete.class);
		Korisnik korisnik = korisnikRepository.findById(deteDto.getKorisnik_id()).get();
		Vrtic vrtic = vrticRepository.findById(deteDto.getVrtic_id()).get();
		dete.setStatus(Status.Cekanje);
		dete.setKorisnik(korisnik);
		dete.setVrtic(vrtic);
		if(deteRepository.findByJmbg(dete.getJmbg()) != null) {
			return null;
		}
		emailService.send(korisnik.getEmail(), emailService.emailDete(korisnik.getIme(), korisnik.getPrezime(), 
				"Uspesno ste podneli zahtev za upis deteta: " + dete.getIme() + " " + dete.getPrezime() + " u vrtic " + dete.getVrtic().getNaziv()));
		return deteRepository.save(dete);
	}
}
