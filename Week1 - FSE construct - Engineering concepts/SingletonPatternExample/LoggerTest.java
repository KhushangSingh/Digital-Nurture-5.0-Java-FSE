public class LoggerTest {
    public static void main(String[] args) {
        System.out.println("\n ---------- Testing SingletonPatternExample ----------\n");

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if (logger1 == logger2) {
            System.out.println("SUCCESS: Both variables point to the exact same Logger instance.\n");
        } else {
            System.out.println("FAILURE: Multiple instances exist.");
        }

        logger1.log("Application initialized.");
        logger2.log("Singleton pattern test complete.\n");
    }
}