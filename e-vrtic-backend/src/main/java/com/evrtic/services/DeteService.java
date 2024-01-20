package com.evrtic.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evrtic.dtos.DeteDto;
import com.evrtic.models.Dete;
import com.evrtic.models.Korisnik;
import com.evrtic.models.Status;
import com.evrtic.repositories.DeteRepository;
import com.evrtic.repositories.KorisnikRepository;

@Service
public class DeteService {

	@Autowired
	private DeteRepository deteRepository;
	
	@Autowired
	private KorisnikRepository korisnikRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public Dete registerChild(DeteDto deteDto) {
		Dete dete = this.modelMapper.map(deteDto, Dete.class);
		Korisnik korisnik = korisnikRepository.findById(deteDto.getKorisnik_id()).get();
		dete.setStatus(Status.Cekanje);
		dete.setKorisnik(korisnik);
		if(deteRepository.findByJmbg(dete.getJmbg()) != null) {
			return null;
		}
		return deteRepository.save(dete);
	}
}
