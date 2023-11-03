import java.util.*;

public class Redondeo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Ingrese un número (0 para salir): ");
            double x = scanner.nextDouble();

            if (x == 0) {
                break;
            }

            double y = Math.floor(x + 0.5);
            System.out.println("Número original: " + x);
            System.out.println("Número redondeado: " + y);
        }
        scanner.close();
    }
}
