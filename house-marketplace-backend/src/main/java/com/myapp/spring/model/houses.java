package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "houses")
public record houses(
		@Id String id,
        String email,
        @JsonProperty("sell/rent") @Field("sell/rent") String sellOrRent,
        String name,
        String bedrooms,
        String bathrooms,
        @JsonProperty("parking spot") @Field("parking spot") boolean parkingSpot,
        boolean furnished,
        String address,
        boolean offer,
        @JsonProperty("regular price") @Field("regular price") String regularPrice,
        @JsonProperty("discounted price") @Field("discounted price") String discountedPrice,
        String[] image
) {
	
	

	


	
	

}


// class Product{
//
//
//}