package com.cognizant;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class CalculatorTest {

    Calculator calc = new Calculator();

    @Test
    public void testAddition() {
        int expected = 10;
        int actual = calc.add(5, 5);
        
        assertEquals("The addition method should return the correct sum", expected, actual);
    }

    @Test
    public void testIsEven() {
        boolean result = calc.isEven(4);
        
        assertTrue("The isEven method should return true for 4", result);
    }
}
