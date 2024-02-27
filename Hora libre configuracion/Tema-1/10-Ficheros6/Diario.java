import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.Scanner;

public class Diario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar la fecha al usuario
        System.out.print("Ingrese la fecha (formato: dd/mm/yyyy): ");
        String fecha = scanner.nextLine();

        // Solicitar la entrada del diario al usuario
        System.out.println("Escriba su entrada de diario (Presione INTRO para finalizar):");
        StringBuilder entradaDiario = new StringBuilder();
        String linea;

        while (!(linea = scanner.nextLine()).isEmpty()) {
            entradaDiario.append(linea).append("\n");
        }

        // Guardar la entrada al final del archivo
        guardarEntradaEnDiario(fecha, entradaDiario.toString());

        System.out.println("Entrada de diario guardada correctamente.");
    }

    private static void guardarEntradaEnDiario(String fecha, String entrada) {
        String rutaArchivo = "diario.txt";

        try (FileWriter fileWriter = new FileWriter(rutaArchivo, true);
                BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {

            // Escribir la fecha y la entrada en el archivo
            bufferedWriter.write("Fecha: " + fecha + "\n");
            bufferedWriter.write(entrada);
            bufferedWriter.write("\n---\n"); // Separador entre entradas

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
