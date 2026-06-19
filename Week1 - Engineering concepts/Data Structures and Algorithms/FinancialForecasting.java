public class FinancialForecasting {

    public static double predictFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        
        double nextYearValue = presentValue * (1 + growthRate);
        return predictFutureValue(nextYearValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double currentRevenue = 100000.0;
        double annualGrowthRate = 0.05;
        int forecastYears = 5;

        System.out.println("\n--- Financial Forecast ---");
        System.out.println("Present Value: $" + currentRevenue);
        
        double futureValue = predictFutureValue(currentRevenue, annualGrowthRate, forecastYears);
        
        System.out.printf("Predicted Value after %d years: $%.2f\n\n", forecastYears, futureValue);
    }
}