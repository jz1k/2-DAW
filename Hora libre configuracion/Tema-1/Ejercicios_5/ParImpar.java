import java.util.*;

public class ParImpar {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        while (true) {
            System.out.print("Ingresa un entero (0 para salir): ");
            int num = teclado.nextInt();

            if (num == 0) {
                break;
            }

            boolean esPar = esPar(num);
            System.out.println("El número " + num + " es par: " + esPar);
        }
    }

    static boolean esPar(int num) {
        return num % 2 == 0;
    }
}
