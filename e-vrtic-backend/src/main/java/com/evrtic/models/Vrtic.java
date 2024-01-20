package com.evrtic.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "vrtic")
public class Vrtic {
	
	@Id
	@GeneratedValue(strategy =	GenerationType.IDENTITY)
	private long vrtic_id;
	
	@Column(name = "naziv", nullable = false)
	private String naziv;
	
	@Column(name = "opis", nullable = false)
	private String opis;
	
	@Column(name="slika", nullable = false)
	private String slika;
	
	@Column(name = "grad", nullable = false)
	private String grad;
}
