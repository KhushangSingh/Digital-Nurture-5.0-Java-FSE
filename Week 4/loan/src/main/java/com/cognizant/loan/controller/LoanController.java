package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoanDetails(@PathVariable String number) {
        Map<String, Object> loanData = new HashMap<>();
        loanData.put("number", number);
        loanData.put("type", "car");
        loanData.put("loan", 400000);
        loanData.put("emi", 3258);
        loanData.put("tenure", 18);
        return loanData;
    }
}