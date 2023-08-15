package com.myapp.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.myapp.spring.dao.CredentialsRepo;
import com.myapp.spring.model.credentials;

@Service
public class CredentialImpl implements CredentialService {

	private CredentialsRepo dao;
	private MongoTemplate mongoTemplate;

	//dependency injection
	public CredentialImpl( CredentialsRepo dao,MongoTemplate mongoTemplate) {
		this.dao = dao;
		this.mongoTemplate=mongoTemplate;
	}



	@Override
	public List<credentials> getAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}



	@Override
	public Optional<credentials> getById(String id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}



	@Override
	public credentials addCred(credentials cred) {
		// TODO Auto-generated method stub
		return dao.save(cred);
	}



	@Override
	public credentials updateExistingCred(credentials cred) {
		// TODO Auto-generated method stub
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(cred.id()));
		
		Update update = new Update();
		update.set("name", cred.name());
		update.set("email", cred.email());
		update.set("password", cred.password());
		FindAndModifyOptions options = FindAndModifyOptions.options().returnNew(true);
		return	mongoTemplate.findAndModify(query, update,options, credentials.class);
	}

}
