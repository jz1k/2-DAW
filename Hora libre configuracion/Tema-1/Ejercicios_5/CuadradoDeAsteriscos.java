import java.util.*;

public class CuadradoDeAsteriscos {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingrese el tamaño del lado para el cuadrado: ");
        int lado = teclado.nextInt();

        cuadradoDeAsteriscos(lado, '*');
    }

    static void cuadradoDeAsteriscos(int lado, char caracterRelleno) {
        for (int i = 0; i < lado; i++) {
            for (int j = 0; j < lado; j++) {
                System.out.print(caracterRelleno + " ");
            }
            System.out.println();
        }
    }
}