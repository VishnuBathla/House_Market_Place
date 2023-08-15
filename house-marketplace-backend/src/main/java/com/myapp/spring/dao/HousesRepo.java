package com.myapp.spring.dao;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.myapp.spring.model.houses;


public interface HousesRepo extends MongoRepository<houses, String> {
		
	
}
