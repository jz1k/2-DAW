package Ejercicios_2;

import java.util.Scanner;

public class Ej_15_CodificarCheque {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce la cantidad del cheque: ");
        double cantidad = scanner.nextDouble();

        String cantidadFormateada = String.format("***%.2f", cantidad);

        System.out.println("Cheque codificado: " + cantidadFormateada);
    }
}