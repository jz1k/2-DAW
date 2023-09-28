package Ejercicios_2;

import java.util.Scanner;

public class Ej_5_ContarCaracteres {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce una palabra: ");
        String texto = scanner.nextLine();

        System.out.print("Introduce el carácter a buscar: ");
        char caracter = scanner.nextLine().charAt(0);

        int contador = 0;
        int index = texto.indexOf(caracter); // Buscar la primera ocurrencia

        while (index != -1) {
            contador++;
            index = texto.indexOf(caracter, index + 1); // Buscar la siguiente ocurrencia
        }

        System.out.println("El carácter '" + caracter + "' aparece " + contador + " veces en el texto.");
    }
}
