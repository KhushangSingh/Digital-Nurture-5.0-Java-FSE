package com.cognizant.spring_learn_handson4.controller;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn_handson4.Country;
import com.cognizant.spring_learn_handson4.service.CountryService;

@RestController
public class CountryController {
	
	@Autowired
    private CountryService countryService;

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        Country india = context.getBean("country", Country.class);
        
        return india;
    }
    
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}