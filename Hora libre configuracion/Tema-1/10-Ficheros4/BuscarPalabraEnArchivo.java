import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class BuscarPalabraEnArchivo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el nombre del archivo de texto: ");
        String nombreArchivo = scanner.nextLine();

        System.out.print("Ingrese la palabra a buscar: ");
        String palabraBuscar = scanner.nextLine();

        try (BufferedReader br = new BufferedReader(new FileReader(nombreArchivo))) {
            String linea;
            int numeroLinea = 1;
            boolean encontrada = false;

            while ((linea = br.readLine()) != null) {
                if (linea.contains(palabraBuscar)) {
                    System.out.println("La palabra '" + palabraBuscar + "' se encuentra en la línea " + numeroLinea);
                    encontrada = true;
                    break; // Puedes comentar esta línea si deseas encontrar todas las ocurrencias
                }
                numeroLinea++;
            }

            if (!encontrada) {
                System.out.println("La palabra '" + palabraBuscar + "' no se encuentra en el archivo.");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        scanner.close();
    }
}
