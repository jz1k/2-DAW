import java.util.Scanner;

public class Multiplos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Ingrese dos enteros separados por espacio (0 0 para salir): ");
            int num1 = scanner.nextInt();
            int num2 = scanner.nextInt();

            if (num1 == 0 && num2 == 0) {
                break;
            }

            boolean esMultiplo = esMultiplo(num1, num2);
            if (esMultiplo) {
                System.out.println(num2 + " es múltiplo de " + num1);
            } else {
                System.out.println(num2 + " no es múltiplo de " + num1);
            }
        }
    }

    public static boolean esMultiplo(int num1, int num2) {
        if (num1 == 0) {
            return false; // Evitar división por cero
        }

        return num2 % num1 == 0;
    }
}
