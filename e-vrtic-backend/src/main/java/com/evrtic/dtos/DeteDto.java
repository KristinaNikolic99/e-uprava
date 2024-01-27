package com.evrtic.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeteDto {

	private String ime;
	private String prezime;
	private String jmbg;
	private LocalDate datumRodjenja;
	private String pol;
	private long korisnik_id;
	private long vrtic_id;
}
