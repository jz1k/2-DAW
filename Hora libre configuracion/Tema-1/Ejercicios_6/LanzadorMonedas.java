// Archivo: LanzadorMonedas.java
import java.util.Random;

public class LanzadorMonedas {
    private static Random random = new Random();

    public static boolean tirar() {
        return random.nextBoolean();
    }
}
