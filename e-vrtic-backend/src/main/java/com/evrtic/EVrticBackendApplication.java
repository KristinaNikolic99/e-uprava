package com.evrtic;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class EVrticBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EVrticBackendApplication.class, args);
	}
	
	@Bean
	ModelMapper getModelMapper() {
		return new ModelMapper();
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
