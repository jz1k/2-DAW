package Ejercicios_2;

import java.util.Scanner;

public class Ej_16_Morse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Seleccione una opción:\n1. Pasar a morse\n2. Pasar desde Morse a Español\nOpción: ");
        int opcion = scanner.nextInt();
        scanner.nextLine(); // Consumir la línea en blanco

        if (opcion == 1) {
            System.out.print("Introduce una frase en español: ");
            String fraseEspañol = scanner.nextLine().toLowerCase();
            String fraseMorse = codificarMorse(fraseEspañol);
            System.out.println("Frase en clave Morse: " + fraseMorse);
        } else if (opcion == 2) {
            System.out.print("Introduce algo en Morse: ");
            String fraseMorse = scanner.nextLine();
            String fraseEspañol = decodificarMorse(fraseMorse);
            System.out.println("Frase en español: " + fraseEspañol);
        } else {
            System.out.println("Opción no válida.");
        }
    }

    public static String codificarMorse(String fraseEspañol) {
        String[] morseCode = {
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
            "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
            "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...",
            "---..", "----."
        };

        String resultado = "";

        char[] caracteres = fraseEspañol.toCharArray();
        for (int i = 0; i < caracteres.length; i++) {
            char caracter = caracteres[i];
            if (caracter >= 'a' && caracter <= 'z') {
                resultado += morseCode[caracter - 'a'] + " ";
            } else if (caracter >= '0' && caracter <= '9') {
                resultado += morseCode[caracter - '0' + 26] + " ";
            } else if (caracter == ' ') {
                resultado += "  "; // Dos espacios para separar palabras en Morse
            }
        }

        return resultado;
    }

    public static String decodificarMorse(String fraseMorse) {
        String[] morseCode = {
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
            "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
            "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...",
            "---..", "----."
        };

        String resultado = "";
        String[] palabrasMorse = fraseMorse.split("  "); // Separar palabras en Morse

        for (int j = 0; j < palabrasMorse.length; j++) {
            String palabraMorse = palabrasMorse[j];
            String[] letrasMorse = palabraMorse.split(" ");
            for (int k = 0; k < letrasMorse.length; k++) {
                String letraMorse = letrasMorse[k];
                for (int i = 0; i < morseCode.length; i++) {
                    if (morseCode[i].equals(letraMorse)) {
                        if (i < 26) {
                            resultado += (char) ('a' + i);
                        } else {
                            resultado += (char) ('0' + i - 26); // Desplazar índice para números
                        }
                        break;
                    }
                }
            }
            resultado += " "; // Espacio entre palabras en español
        }

        return resultado.trim(); // Eliminar espacios al principio y al final
    }
}