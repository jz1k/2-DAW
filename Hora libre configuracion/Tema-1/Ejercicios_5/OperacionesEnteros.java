import java.util.*;

public class OperacionesEnteros {
    public static void main(String[] args) {
        // a) Calcular la parte entera del cociente
        int a = 10;
        int b = 3;
        int cociente = a / b;
        System.out.println("Cociente: " + cociente);

        // b) Calcular el residuo entero
        int residuo = a % b;
        System.out.println("Residuo: " + residuo);

        // c) Método mostrarDigitos
        int num = 4562;
        mostrarDigitos(num);
    }

    static void mostrarDigitos(int num) {
        System.out.println(num / 1000 + "  " + num / 100 % 10 + "  " + num / 10 % 10 + "  " + num % 10);
    }
}