
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

public class Ejercicio1 {
    static Scanner teclado = new Scanner(System.in);

    public static void main (String[] args){
		//DECLARACION DE VARIABLES
		byte opcion;
        boolean salirMenu = false;
        String palabra;
		
		System.out.println("Bienvenido a este programa, introduce una palabra");
        palabra=teclado.nextLine();

        do {
            System.out.println("\nSeleccione una opción:");
            System.out.println("\t1 - Mostrar al revés");
            System.out.println("\t2 - Contar el nº de vocales");
            System.out.println("\t3 - Contar el nº de consonantes");
            System.out.println("\t4 - Pasar todo a minúsculas");
            System.out.println("\t5 - Pasar todo a mayúsculas");
            System.out.println("\t6 - Deci si es palindroma");
            System.out.println("\t0 - Salir");
            try {
                opcion = teclado.nextByte();
                teclado.nextLine(); // limpiar buffer de teclado

                switch (opcion) {
                    case 1:
                        //MOSTRAR AL REVES
                        
						
                        break;
                    case 2:
                        
						
                        break;
                    case 3:
                        
						
                        break;
                    case 4:
                        
						
                        break;
                    case 5:
                        
						
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
	}//FIN MENU

    //CONFIRMACION DE SALIDA
    public static boolean confirmarSalida(char x) {
        x = Character.toLowerCase(x);
        if (x == 's') {
            System.out.println("Gracias por usar el programa, adios!");
            return true;
        } else {
            return false;
        }
    }//FIN SALIDA

    public static String reves(String revesString){
        String palabraOriginal=revesString;
        String palabraInvertida;
        int reverse=palabraOriginal.length();
        for (int i = 0; i < palabraOriginal.length(); i++) {
            palabraInvertida.charAt(reverse)=;
            reverse--;
        }
        return palabraInvertida;
    }

}//FIN CLASS