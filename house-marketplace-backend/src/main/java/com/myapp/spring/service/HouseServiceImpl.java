package com.myapp.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.myapp.spring.dao.HousesRepo;
import com.myapp.spring.model.houses;

@Service
public class HouseServiceImpl implements HouseService {
	
	
	private HousesRepo dao1;
	private MongoTemplate mongoTemplate;


	//dependency injection
	public HouseServiceImpl( HousesRepo dao1, MongoTemplate mongoTemplate) {
		this.dao1 = dao1;
		this.mongoTemplate = mongoTemplate;
		
	}



	@Override
	public List<houses> loadAll() {
//		dao1.findAll().forEach(i->System.out.println(i));
		// TODO Auto-generated method stub
		return dao1.findAll();
	}



	@Override
	public Optional<houses> findbyId(String id) {
		// TODO Auto-generated method stub
		return dao1.findById(id);
	}



	@Override
	public houses addHouse(houses house) {
		// TODO Auto-generated method stub
		return dao1.save(house);
	}



	@Override
	public houses updateExistingHouse(houses house) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(house.id()));
		Update update = new Update();
		update.set("email", house.email());
		update.set("sell/rent", house.sellOrRent());
		update.set("name", house.name());
		update.set("bedrooms", house.bedrooms());
		update.set("bathrooms", house.bathrooms());
		update.set("parking spot", house.parkingSpot());
		update.set("furnished", house.furnished());
		update.set("address", house.address());
		update.set("offer", house.offer());
		update.set("regular price", house.regularPrice());
		update.set("discounted price", house.discountedPrice());
		update.set("image", house.image());
		FindAndModifyOptions options = FindAndModifyOptions.options().returnNew(true);
		return	mongoTemplate.findAndModify(query, update,options, houses.class);
	}



	@Override
	public void deleteExistingHouse(String id) {
		// TODO Auto-generated method stub
		dao1.deleteById(id);
	}

	

}
