package com.cognizant.spring_learn_handson4.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    // Include method authenticate with "/authenticate" as the URL with @GetMapping
    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START: Execution of authenticate() method");
        LOGGER.debug("Auth Header: {}", authHeader);
        
        // Invoke the getUser() method[cite: 9]
        String user = getUser(authHeader);
        
        // Invoke generateJwt() passing the user[cite: 9]
        String token = generateJwt(user);
        
        // Create a new HashMap and put the token[cite: 9]
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        
        LOGGER.info("END: Execution of authenticate() method");
        return response;
    }

    // Method to read and decode the Authorization header[cite: 9]
    private String getUser(String authHeader) {
        // Get the Base64 encoded text after "Basic "[cite: 9]
        String encodedCredentials = authHeader.substring(6);
        
        // Decode it using the library available in Java 8 API[cite: 9]
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedString = new String(decodedBytes);
        
        // Get the text until colon to get the user[cite: 9]
        String user = decodedString.substring(0, decodedString.indexOf(":"));
        
        LOGGER.debug("Decoded User: {}", user);
        return user;
    }

    // Method to generate the token[cite: 9]
    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        
        // Set the token issue time as current time[cite: 9]
        builder.setIssuedAt(new Date());
        
        // Set the token expiry as 20 minutes from now[cite: 9]
        builder.setExpiration(new Date((new Date()).getTime() + 1200000));
        
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");
        String token = builder.compact();
        
        return token;
    }
}