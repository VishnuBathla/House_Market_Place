package com.myapp.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.credentials;
import com.myapp.spring.model.houses;
import com.myapp.spring.service.HouseService;

// http://localhost:8888/products

@RestController
@RequestMapping("/houses")
public class HouseController {
	
	
	private HouseService HouseService;
	

	

	public HouseController(HouseService houseService) {
		this.HouseService = houseService;

	}
	
	@GetMapping
	public ResponseEntity<List<houses>> findAll(){
		return new  ResponseEntity<>(HouseService.loadAll(),HttpStatus.OK);
	}
	@GetMapping("/{id}")
    public ResponseEntity<Optional<houses>> getById(@PathVariable("id") String id) {
		return new  ResponseEntity<>(HouseService.findbyId(id) ,HttpStatus.OK);
    }
	@PostMapping	
	public ResponseEntity<houses> addCred(@RequestBody houses house){
		return new  ResponseEntity<>(HouseService.addHouse(house),HttpStatus.CREATED);
	}
	@PutMapping("/{id}")
	public ResponseEntity<houses> updateHouse( @RequestBody houses house){
//		System.out.println(house);
		return new ResponseEntity<>(HouseService.updateExistingHouse(house),HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteHouse( @PathVariable("id") String id){
//		System.out.println(house);
		HouseService.deleteExistingHouse(id);
		return new ResponseEntity<>("Deleted",HttpStatus.OK);
	}
	
	
	

}
