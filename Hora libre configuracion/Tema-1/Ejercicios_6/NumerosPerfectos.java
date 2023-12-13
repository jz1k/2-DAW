// Archivo: NumerosPerfectos.java
public class NumerosPerfectos {
    public static boolean esPerfecto(int numero) {
        int suma = 0;
        for (int i = 1; i <= numero / 2; i++) {
            if (numero % i == 0) {
                suma += i;
            }
        }
        return suma == numero;
    }
}
