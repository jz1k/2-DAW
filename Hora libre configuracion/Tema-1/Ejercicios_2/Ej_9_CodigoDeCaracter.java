package Ejercicios_2;

import java.util.Scanner;

public class Ej_9_CodigoDeCaracter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce un código entero para un carácter: ");
        int codigo = scanner.nextInt();

        char caracter = (char) codigo;
        System.out.println("El carácter correspondiente es: " + caracter);
    }
}