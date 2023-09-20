/*
 
Pedir por teclado una cadena:
Mostrar menú:
Mostrarla al revés
Contar el nº de vocales
Contar el nº de consonantes
Pasar todo a minúscula
Pasar todo a mayúscula
Decir si es palíndroma
*/

import java.util.*;
import java.lang.*;

public class Ejercicio1 {
    static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        //DECLARACION DE VARIABLES
        byte opcion;
        boolean salirMenu = false;
        String palabra;

        System.out.println("Bienvenido a este programa, introduce una palabra");
        palabra = teclado.nextLine();

        do {
            System.out.println("\nSeleccione una opción:");
            System.out.println("\t1 - Mostrar al revés");
            System.out.println("\t2 - Contar el nº de vocales");
            System.out.println("\t3 - Contar el nº de consonantes");
            System.out.println("\t4 - Pasar todo a minúsculas");
            System.out.println("\t5 - Pasar todo a mayúsculas");
            System.out.println("\t6 - Decir si es palindroma");
            System.out.println("\t0 - Salir");
            try {
                opcion = teclado.nextByte();
                teclado.nextLine(); // limpiar buffer de teclado

                switch (opcion) {
                    case 1:
                        //MOSTRAR AL REVES
                        System.out.println(palabra + " al revés es: " + reves(palabra));
                        break;
                    case 2:
                        //CONTAR NUMERO DE VOCALES
                        System.out.println(palabra + " tiene "+ vocales(palabra)+ " vocales");
                        break;
                    case 3:
                        //CONTAR NUMERO DE CONSONANTES
                        System.out.println(palabra + " tiene "+ consonantes(palabra)+ " consonantes");
                        break;
                    case 4:
                        //MINUSCULA
                        System.out.println("La palabra "+palabra+" en minuscula es " + minuscula(palabra));
                        break;
                    case 5:
                        //mayuscula
                        System.out.println("La palabra "+palabra+" en mayuscula es " + mayuscula(palabra));
                        break;
                    case 6:


                        break;
                    case 0: //SALIDA
                        System.out.println("Vas a salir, estás seguro?\n(s/n)");
                        char salida = teclado.next().charAt(0);
                        salirMenu = confirmarSalida(salida);
                        break;
                    default:
                        System.out.println("Selecciona una opcion valida");
                        break;
                }
            } catch (InputMismatchException e) {
                System.out.println("Introduce el caracter correcto");
                teclado.nextLine(); // limpiar buffer de teclado
            }
        } while (salirMenu != true);
    } //FIN MENU

    //CONFIRMACION DE SALIDA
    public static boolean confirmarSalida(char x) {
        x = Character.toLowerCase(x);
        if (x == 's') {
            System.out.println("Gracias por usar el programa, adios!");
            return true;
        } else {
            return false;
        }
    } //FIN SALIDA

    //INVERTIR PALABRAS
    public static String reves(String revesString) {
        StringBuilder palabraInvertida = new StringBuilder(revesString);
        palabraInvertida.reverse();
        return palabraInvertida.toString();
    }

    //CONTAR NUMERO DE VOCALES
    public static int vocales(String vocalString) {
        String palabra = vocalString.toLowerCase();
        int numVocales=0;
        for (int i = 0; i < palabra.length(); i++) {
            char v = palabra.charAt(i);
            if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u') {
                numVocales++;
            }
        }
        return numVocales;
    }

    //CONTAR NUMERO DE CONSONANTES
    public static int consonantes(String consonanteString) {
        String palabra = consonanteString.toLowerCase();
        int numConsonantes=0;
        for (int i = 0; i < palabra.length(); i++) {
            char v = palabra.charAt(i);
            if (v != 'a' && v != 'e' && v != 'i' && v != 'o' && v != 'u') {
                numConsonantes++;
            }
        }
        return numConsonantes;
    }

    //PASAR A MINUSCULA
    public static String minuscula (String minusculaString){
        String minuscula=minusculaString.toLowerCase();
        return minuscula;
    }

    //PASAR A MAYUSCULA
    public static String mayuscula (String mayusculaString){
        String mayuscula=mayusculaString.toUpperCase();
        return mayuscula;
    }

} //FIN CLASS