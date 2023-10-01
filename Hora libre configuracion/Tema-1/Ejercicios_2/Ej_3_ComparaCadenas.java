package Ejercicios_2;

import java.util.*;

public class Ej_3_ComparaCadenas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce la primera cadena: ");
        String cadena1 = scanner.nextLine();

        System.out.print("Introduce la segunda cadena: ");
        String cadena2 = scanner.nextLine();

        int resultado = cadena1.compareTo(cadena2);

        if (resultado < 0) {
            System.out.println("La primera cadena es menor que la segunda.");
        } else if (resultado > 0) {
            System.out.println("La primera cadena es mayor que la segunda.");
        } else {
            System.out.println("Las cadenas son iguales.");
        }
    }
}
