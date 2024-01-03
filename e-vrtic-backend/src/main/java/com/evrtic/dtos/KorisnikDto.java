package com.evrtic.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class KorisnikDto {

private String ime;
	
	private String prezime;
	private String jmbg;
	private String drzava;
	private String grad;
	private String username;
	private String password;
	
}
