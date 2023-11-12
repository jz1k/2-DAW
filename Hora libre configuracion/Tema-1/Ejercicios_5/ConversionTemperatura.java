import java.util.*;

public class ConversionTemperatura {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Elija una opción \n\t1 para Fahrenheit a Celsius\n\t2 para Celsius a Fahrenheit: ");
        int opcion = teclado.nextInt();

        if (opcion == 1) {
            System.out.print("Ingrese la temperatura en Fahrenheit: ");
            double fahrenheit = teclado.nextDouble();
            double celsius = fahrenheitACelsius(fahrenheit);
            System.out.println("Equivalente en Celsius: " + celsius);
        } else if (opcion == 2) {
            System.out.print("Ingrese la temperatura en Celsius: ");
            double celsius = teclado.nextDouble();
            double fahrenheit = celsiusAFahrenheit(celsius);
            System.out.println("Equivalente en Fahrenheit: " + fahrenheit);
        } else {
            System.out.println("Opción no válida");
        }
    }

    static double fahrenheitACelsius(double fahrenheit) {
        return 5.0 / 9.0 * (fahrenheit - 32);
    }

    static double celsiusAFahrenheit(double celsius) {
        return 9.0 / 5.0 * celsius + 32;
    }
}