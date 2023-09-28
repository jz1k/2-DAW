package Ejercicios_2;

import java.util.Scanner;

public class Ej_6_ContarLetras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce una palabra: ");
        String texto = scanner.nextLine().toLowerCase();

        int[] contadorLetras = new int[26]; // Una entrada para cada letra del alfabeto

        for (char letra = 'a'; letra <= 'z'; letra++) {
            int index = texto.indexOf(letra); // Buscar la primera ocurrencia de la letra
            int contador = 0;

            while (index != -1) {
                contador++;
                index = texto.indexOf(letra, index + 1); // Buscar la siguiente ocurrencia
            }

            contadorLetras[letra - 'a'] = contador;
        }

        System.out.println("Letra\tCantidad");
        for (char letra = 'a'; letra <= 'z'; letra++) {
            int cantidad = contadorLetras[letra - 'a'];
            System.out.println(letra + "\t" + cantidad);
        }
    }
}
