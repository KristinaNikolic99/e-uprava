package com.evrtic.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class EmailTokenService {

    @Autowired
    private EmailTokenRepository emailTokenRepository;

    public void saveEmailToken(EmailToken emailToken){
        emailTokenRepository.save(emailToken);
    }
    
    public void updateDatumPotvrde(EmailToken emailToken) {
    	emailTokenRepository.updateDatumPotvrde(emailToken.getToken(), LocalDateTime.now());
    }

    public EmailToken getEmailToken(String token){

        return emailTokenRepository.findByToken(token);
    }

    public int setDatumPotvrde(String token){

        return  emailTokenRepository.updateDatumPotvrde(token, LocalDateTime.now());
    }
}
