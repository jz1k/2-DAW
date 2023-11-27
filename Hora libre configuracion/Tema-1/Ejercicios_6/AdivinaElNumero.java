// Archivo: AdivinaElNumero.java
import java.util.Random;
import java.util.Scanner;

public class AdivinaElNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        do {
            int numeroAdivinar = random.nextInt(1000) + 1;
            int intento;
            boolean acertado = false;

            System.out.println("Adivina un número entre 1 y 1000.");

            do {
                System.out.print("Tu intento: ");
                intento = scanner.nextInt();

                if (intento > numeroAdivinar) {
                    System.out.println("Demasiado alto. Inténtalo de nuevo.");
                } else if (intento < numeroAdivinar) {
                    System.out.println("Demasiado bajo. Inténtalo de nuevo.");
                } else {
                    acertado = true;
                    System.out.println("¡Felicidades! ¡Adivinaste el número!");
                }
            } while (!acertado);

            System.out.print("¿Quieres jugar de nuevo? (1: Sí, 2: No): ");
        } while (scanner.nextInt() == 1);
    }
}
