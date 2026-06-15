public class Logger {
    private static Logger instance;

    private Logger() {
        if (instance != null) {
            throw new RuntimeException("Use getInstance() method to get the single instance.");
        }
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}