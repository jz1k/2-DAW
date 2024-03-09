import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class OperacionesArchivoTexto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("1. Leer y mostrar el archivo por pantalla.");
        System.out.println("2. Escribir una frase al final del archivo.");
        System.out.println("3. Triturar el archivo con una frase.");
        System.out.print("Elija una opción (1, 2 o 3): ");

        int opcion = scanner.nextInt();

        switch (opcion) {
            case 1:
                leerYMostrarArchivo();
                break;
            case 2:
                escribirAlFinalDelArchivo();
                break;
            case 3:
                triturarArchivoConFrase();
                break;
            default:
                System.out.println("Opción no válida. El programa terminará.");
        }

        scanner.close();
    }

    private static void leerYMostrarArchivo() {
        String nombreArchivo = "tu_archivo.txt"; // Reemplaza con el nombre de tu archivo

        try (BufferedReader br = new BufferedReader(new FileReader(nombreArchivo))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void escribirAlFinalDelArchivo() {
        String nombreArchivo = "tu_archivo.txt"; // Reemplaza con el nombre de tu archivo
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la frase para agregar al final del archivo: ");
        String nuevaFrase = scanner.nextLine();

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(nombreArchivo, true))) {
            bw.newLine();
            bw.write(nuevaFrase);
            System.out.println("Frase agregada al final del archivo.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void triturarArchivoConFrase() {
        String nombreArchivo = "tu_archivo.txt"; // Reemplaza con el nombre de tu archivo
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese la frase para triturar el archivo: ");
        String fraseTrituradora = scanner.nextLine();

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(nombreArchivo, false))) {
            bw.write(fraseTrituradora);
            System.out.println("Archivo triturado con la nueva frase.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
