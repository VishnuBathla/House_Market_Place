package com.myapp.spring.service;

import java.util.List;
import java.util.Optional;

import com.myapp.spring.model.credentials;
import com.myapp.spring.model.houses;

public interface HouseService {
	
	List<houses> loadAll();
	Optional<houses> findbyId(String id);
	houses addHouse(houses house);
	houses updateExistingHouse(houses house);
	void deleteExistingHouse(String id);


}
