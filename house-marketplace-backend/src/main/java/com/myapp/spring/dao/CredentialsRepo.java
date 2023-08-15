package com.myapp.spring.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.myapp.spring.model.credentials;

public interface CredentialsRepo extends MongoRepository<credentials, String>  {

}
