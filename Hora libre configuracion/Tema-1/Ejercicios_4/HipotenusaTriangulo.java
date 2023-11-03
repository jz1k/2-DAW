import java.util.*;

public class HipotenusaTriangulo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Triángulo 1");
        double lado1 = 3.0;
        double lado2 = 4.0;

        double hipotenusa1 = hipotenusa(lado1, lado2);
        System.out.println("Longitud de la hipotenusa: " + hipotenusa1);

        System.out.println("Triángulo 2");
        double lado3 = 8.0;
        double lado4 = 12.0;

        double hipotenusa2 = hipotenusa(lado3, lado4);
        System.out.println("Longitud de la hipotenusa: " + hipotenusa2);
    }

    public static double hipotenusa(double lado1, double lado2) {
        double hipotenusa = Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2));
        return hipotenusa;
    }
}
