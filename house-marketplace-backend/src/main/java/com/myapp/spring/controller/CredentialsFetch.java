package com.myapp.spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.credentials;
import com.myapp.spring.service.CredentialService;

@RestController
@RequestMapping("/credentials")
public class CredentialsFetch {
		private CredentialService service;
		public CredentialsFetch(CredentialService service) {
			this.service = service;

		}
		
		@GetMapping
		public ResponseEntity<List<credentials>> findAll(){
			return new  ResponseEntity<>(service.getAll(),HttpStatus.OK);
		}
		@PostMapping	
		public ResponseEntity<credentials> addCred(@RequestBody credentials cred){
			return new  ResponseEntity<>(service.addCred(cred),HttpStatus.CREATED);
		}
		@PutMapping("/{id}")
		public ResponseEntity<credentials> updateCred( @RequestBody credentials cred){
			return new  ResponseEntity<>(service.updateExistingCred(cred),HttpStatus.OK);
		}
		
		
		
		
		


}
