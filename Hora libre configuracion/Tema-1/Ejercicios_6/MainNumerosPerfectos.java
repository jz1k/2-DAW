// Archivo: AplicacionNumerosPerfectos.java
public class MainNumerosPerfectos {
    public static void main(String[] args) {
        System.out.println("Números perfectos entre 1 y 1000:");
        for (int i = 1; i <= 1000; i++) {
            if (NumerosPerfectos.esPerfecto(i)) {
                System.out.println(i);
            }
        }
    }
}
