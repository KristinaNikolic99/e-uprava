package com.evrtic.models;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "dete")
public class Dete {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long dete_id;
	
	@Column(name = "ime", nullable = false)
	private String ime;
	
	@Column(name = "prezime", nullable = false)
	private String prezime;
	
	@Column(name = "jmbg", nullable = false)
	private String jmbg;
	
	@Column(name = "datum_rodjenja", nullable = false)
	private LocalDate datumRodjenja;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "pol", nullable = false)
	private Pol pol;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "status", nullable = false)
	private Status status;
	
	@ManyToOne
	@JoinColumn(name = "korisnik_id")
	private Korisnik korisnik;
}
