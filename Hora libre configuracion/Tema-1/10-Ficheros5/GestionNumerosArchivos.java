import java.io.*;
import java.util.*;

public class GestionNumerosArchivos {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número entero: ");
        int numeroArchivos = scanner.nextInt();

        // Crear archivos y llenarlos con números aleatorios
        try {
            for (int i = 1; i <= numeroArchivos; i++) {
                String nombreArchivo = i + ".txt";
                OperacionesArchivo.llenarArchivo(nombreArchivo);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Menú de operaciones
        while (true) {
            System.out.println("\n¿Qué quiere hacer con estos números?");
            System.out.println("1) Buscar el mayor (de entre todos los archivos)");
            System.out.println("2) Buscar el menor (de entre todos los archivos)");
            System.out.println("3) Buscar la media (de entre todos los archivos)");
            System.out.println("4) Buscar la suma (de entre todos los archivos)");
            System.out.println("5) Buscar un número concreto y decir en qué ficheros aparece");
            System.out.println("6) Salir");

            int opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    OperacionesArchivo.buscarMayor();
                    break;
                case 2:
                    OperacionesArchivo.buscarMenor();
                    break;
                case 3:
                    OperacionesArchivo.buscarMedia();
                    break;
                case 4:
                    OperacionesArchivo.buscarSuma();
                    break;
                case 5:
                    OperacionesArchivo.buscarNumeroConcreto();
                    break;
                case 6:
                    System.out.println("Saliendo del programa. ¡Hasta luego!");
                    System.exit(0);
                default:
                    System.out.println("Opción no válida. Inténtelo de nuevo.");
            }
        }
    }
}
