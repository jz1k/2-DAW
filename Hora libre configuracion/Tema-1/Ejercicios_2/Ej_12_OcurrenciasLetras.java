package Ejercicios_2;

import java.util.Scanner;

public class Ej_12_OcurrenciasLetras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce texto: ");
        String texto = scanner.nextLine().toLowerCase();

        int[] contadorLetras = new int[26]; // Una entrada para cada letra del alfabeto

        for (int i = 0; i < texto.length(); i++) {
            char caracter = texto.charAt(i);
            if (Character.isLetter(caracter)) {
                int indice = caracter - 'a'; // Calcular el índice de la letra
                contadorLetras[indice]++;
            }
        }

        System.out.println("Letra\tCantidad");
        for (char letra = 'a'; letra <= 'z'; letra++) {
            int indice = letra - 'a';
            int cantidad = contadorLetras[indice];
            System.out.println(letra + "\t" + cantidad);
        }
    }
}
