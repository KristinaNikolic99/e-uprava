package com.evrtic.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.evrtic.dtos.KorisnikDto;
import com.evrtic.email.EmailService;
import com.evrtic.email.EmailToken;
import com.evrtic.email.EmailTokenService;
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
	
    @Autowired
    private EmailTokenService emailTokenService;

    @Autowired
    private EmailService emailService;
	
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
		 String token = UUID.randomUUID().toString();
	        EmailToken emailToken = new EmailToken(token, LocalDateTime.now(),LocalDateTime.now().plusMinutes(15),korisnik);
	        emailTokenService.saveEmailToken(emailToken);
	        String link = "http://localhost:8080/api/confirm?token=" + token;
	        emailService.send(korisnik.getEmail(),
	                emailService.emailKreiranje(korisnik.getIme(),link));
		return korisnikRepository.save(korisnik);
	}
	
	public Korisnik logIn(String username, String password) {
		Korisnik korisnik = korisnikRepository.findByUsername(username);
		if(!korisnik.isStatusNaloga()) {
			return null;
		}
		
		if (korisnik != null && passwordEncoder.matches(password, korisnik.getPassword())) {
			return korisnik;
		}
		
		return null;
	}
	
    public String confirmEmailToken(String token) {

        EmailToken emailToken = emailTokenService.getEmailToken(token);

        if(emailToken == null){
            throw new IllegalStateException("Token nije validan");

        }
        if (emailToken.getDatumPotvrde() != null){

            throw new IllegalStateException("Email je vec verifikovan");
        }
        if(emailToken.getDatumIsticanja().isBefore(LocalDateTime.now())){
            throw new IllegalStateException("Token je istekao");
        }
        Korisnik korisnik = emailToken.getKorisnik();
        korisnik.setStatusNaloga(true);
        emailTokenService.updateDatumPotvrde(emailToken);
        korisnikRepository.save(korisnik);
        return "Korisnik je uspesno verifikovao svoj email";
    }
	
	 
}
