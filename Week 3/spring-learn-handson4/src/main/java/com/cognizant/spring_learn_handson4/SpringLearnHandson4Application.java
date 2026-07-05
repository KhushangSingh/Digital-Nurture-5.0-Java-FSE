package com.cognizant.spring_learn_handson4;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnHandson4Application {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnHandson4Application.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnHandson4Application.class, args);

        // Invoke the updated method to display the country list on startup
        displayCountries();
    }

    public static void displayCountries() {
        // Read the spring configuration file
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        // Retrieve the new list bean instead of the old single bean
        @SuppressWarnings("unchecked")
        ArrayList<Country> countries = (ArrayList<Country>) context.getBean("countryList");
        
        // Display the list using the debug logger
        LOGGER.debug("Countries loaded from XML : {}", countries);
    }
}