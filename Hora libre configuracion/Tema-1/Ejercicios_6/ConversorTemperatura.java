// Archivo: ConversorTemperatura.java
public class ConversorTemperatura {
    public static double centigrados(double fahrenheit) {
        return 5.0 / 9.0 * (fahrenheit - 32);
    }

    public static double fahrenheit(double centigrados) {
        return 9.0 / 5.0 * centigrados + 32;
    }
}
