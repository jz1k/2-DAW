package Ejercicios_2;

import java.util.Scanner;

public class Ej_13_OcurrenciasSegunNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce texto: ");
        String texto = scanner.nextLine();
        String[] palabras = texto.split("\\s+"); // Dividir el texto en palabras

        int[] contadorPalabrasPorLongitud = new int[11]; // Para palabras de 1 a 10 letras

        for (String palabra : palabras) {
            int longitud = palabra.length();
            if (longitud <= 10) {
                contadorPalabrasPorLongitud[longitud]++;
            }
        }

        System.out.println("Longitud de palabra\tApariciones");
        for (int longitud = 1; longitud <= 10; longitud++) {
            int ocurrencias = contadorPalabrasPorLongitud[longitud];
            System.out.println(longitud + "\t\t\t" + ocurrencias);
        }
    }
}
