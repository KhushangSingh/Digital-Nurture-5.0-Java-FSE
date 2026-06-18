import java.util.Arrays;

class Product implements Comparable<Product> {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }

    @Override
    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName;
    }
}

public class SearchPlatform {

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (products[mid].productId == targetId) {
                return products[mid];
            }
            if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] inventory = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Mouse", "Electronics"),
            new Product(109, "Keyboard", "Electronics"),
            new Product(103, "Monitor", "Electronics")
        };

        System.out.println("--- Linear Search ---");
        Product foundLinear = linearSearch(inventory, 109);
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Product not found.");

        System.out.println("\n--- Binary Search ---");
        Arrays.sort(inventory); 
        Product foundBinary = binarySearch(inventory, 103);
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Product not found.");
    }
}