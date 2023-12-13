// Archivo: AplicacionLanzadorMonedas.java
import java.util.Scanner;

public class MainLanzadorMonedas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int caras = 0;
        int cruces = 0;

        System.out.println("Seleccione una opción:");
        System.out.println("1. Lanzar moneda");
        System.out.println("2. Salir");

        int opcion = scanner.nextInt();
        while (opcion == 1) {
            boolean resultado = LanzadorMonedas.tirar();
            if (resultado) {
                caras++;
                System.out.println("Cara");
            } else {
                cruces++;
                System.out.println("Cruz");
            }

            System.out.println("Seleccione una opción:");
            System.out.println("1. Lanzar moneda");
            System.out.println("2. Salir");
            opcion = scanner.nextInt();
        }

        System.out.println("Resultados:");
        System.out.println("Caras: " + caras);
        System.out.println("Cruces: " + cruces);
    }
}
