package Ejercicios_2;

public class Ej_11_MetodosPersonalizados {
    public static int miIndexOf(String texto, char caracter) {
        for (int i = 0; i < texto.length(); i++) {
            if (texto.charAt(i) == caracter) {
                return i;
            }
        }
        return -1; // Si no se encuentra el carácter
    }

    public static int miLastIndexOf(String texto, char caracter) {
        for (int i = texto.length() - 1; i >= 0; i--) {
            if (texto.charAt(i) == caracter) {
                return i;
            }
        }
        return -1; // Si no se encuentra el carácter
    }

    public static void main(String[] args) {
        String texto = "texto de ejemplo";
        char caracter = 'e';

        int indexOfResult = miIndexOf(texto, caracter);
        int lastIndexOfResult = miLastIndexOf(texto, caracter);

        System.out.println("Posición de la primera aparición de '" + caracter + "': " + indexOfResult);
        System.out.println("Posición de la última aparición de '" + caracter + "': " + lastIndexOfResult);
    }
}
