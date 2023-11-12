import java.util.*;

public class AreaCirculo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingrese el radio del círculo: ");
        double radio = teclado.nextDouble();

        double area = circuloArea(radio);

        System.out.println("El área del círculo es: " + area);
    }

    static double circuloArea(double radio) {
        return Math.PI * Math.pow(radio, 2);
    }
}