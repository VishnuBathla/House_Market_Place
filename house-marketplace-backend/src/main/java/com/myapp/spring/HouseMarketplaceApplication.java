package com.myapp.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class HouseMarketplaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(HouseMarketplaceApplication.class, args);
	}

    @Configuration
    public class CorsConfig implements WebMvcConfigurer {
//cross origin requests handling
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .maxAge(3600);
        }
    }}
