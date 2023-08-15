package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "credentials")
public record credentials(
		 @Id String id,
		 String name,
		 String email,
		 String password
)  {
	
}
