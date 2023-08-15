package com.myapp.spring.service;

import java.util.List;
import java.util.Optional;

import com.myapp.spring.model.credentials;

public interface CredentialService {
	List<credentials> getAll();
	Optional<credentials> getById(String id);
	credentials addCred(credentials cred);
	credentials updateExistingCred(credentials cred);
}
