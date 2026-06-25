package com.cognizant;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;
    private int firstNumber;
    private int secondNumber;

    @Before
    public void setUp() {
        calculator = new Calculator();
        firstNumber = 10;
        secondNumber = 5;
    }

    @After
    public void tearDown() {
        calculator = null;
        firstNumber = 0;
        secondNumber = 0;
    }

    @Test
    public void shouldAddNumbersUsingAaaPattern() {
        int expected = 15;

        int actual = calculator.add(firstNumber, secondNumber);

        assertEquals(expected, actual);
    }

    @Test
    public void shouldSubtractNumbersUsingAaaPattern() {
        int expected = 5;

        int actual = calculator.subtract(firstNumber, secondNumber);

        assertEquals(expected, actual);
    }
}