package Ejercicios_2;

import java.util.Scanner;

public class Ej_4_ImprimeTexto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce una palabra/frase: ");
        String texto = scanner.nextLine();

        System.out.println("Texto en mayúsculas: " + texto.toUpperCase());
        System.out.println("Texto en minúsculas: " + texto.toLowerCase());
    }
}
