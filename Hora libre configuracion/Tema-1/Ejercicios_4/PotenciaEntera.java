import java.util.*;

public class PotenciaEntera {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la base: ");
        int base = scanner.nextInt();
        System.out.print("Ingrese el exponente (debe ser un entero positivo): ");
        int exponente = scanner.nextInt();

        int resultado = enteroPotencia(base, exponente);
        System.out.println(base + "^" + exponente + " = " + resultado);

        int resultadoRecursivo = enteroPotenciaRecursivo(base, exponente);
        System.out.println(base + "^" + exponente + " (recursivo) = " + resultadoRecursivo);
    }

    public static int enteroPotencia(int base, int exponente) {
        int resultado = 1;
        for (int i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }

    public static int enteroPotenciaRecursivo(int base, int exponente) {
        if (exponente == 0) {
            return 1;
        }
        return base * enteroPotenciaRecursivo(base, exponente - 1);
    }
}
