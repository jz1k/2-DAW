// Archivo: AplicacionTemperatura.java
import java.util.Scanner;

public class MainTemperatura {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Seleccione una opción:");
        System.out.println("1. Fahrenheit a Centígrados");
        System.out.println("2. Centígrados a Fahrenheit");
        int opcion = scanner.nextInt();

        if (opcion == 1) {
            System.out.print("Ingrese la temperatura en Fahrenheit: ");
            double temperaturaF = scanner.nextDouble();
            double temperaturaC = ConversorTemperatura.centigrados(temperaturaF);
            System.out.println("Equivalente en Centígrados: " + temperaturaC);
        } else if (opcion == 2) {
            System.out.print("Ingrese la temperatura en Centígrados: ");
            double temperaturaC = scanner.nextDouble();
            double temperaturaF = ConversorTemperatura.fahrenheit(temperaturaC);
            System.out.println("Equivalente en Fahrenheit: " + temperaturaF);
        } else {
            System.out.println("Opción no válida.");
        }
    }
}

