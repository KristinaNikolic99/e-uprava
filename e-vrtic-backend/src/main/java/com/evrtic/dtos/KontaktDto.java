package com.evrtic.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class KontaktDto {
	
	private String ime;
	private String prezime;
	private String email;
	private String telefon;
	private String poruka;

}
