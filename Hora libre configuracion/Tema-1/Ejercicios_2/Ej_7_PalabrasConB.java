package Ejercicios_2;

import java.util.Scanner;

public class Ej_7_PalabrasConB {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce una línea de texto: ");
        String texto = scanner.nextLine();
        String[] palabras = texto.split("\\s+"); // Dividir el texto en palabras

        System.out.println("Palabras que comienzan con 'b':");
        for (int i = 0; i < palabras.length; i++) {
            String palabra = palabras[i];
            if (palabra.toLowerCase().startsWith("b")) {
                System.out.println(palabra);
            }
        }
    }
}
