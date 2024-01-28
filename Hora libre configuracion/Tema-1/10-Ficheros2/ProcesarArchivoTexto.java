import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ProcesarArchivoTexto {
    public static void main(String[] args) {
        String nombreArchivoEntrada = "fichero-a.txt";
        String nombreArchivoSalida = "fichero-b.txt";

        try (BufferedReader br = new BufferedReader(new FileReader(nombreArchivoEntrada));
                BufferedWriter bw = new BufferedWriter(new FileWriter(nombreArchivoSalida))) {

            String linea;
            while ((linea = br.readLine()) != null) {
                String lineaSinVocales = quitarVocales(linea);
                bw.write(lineaSinVocales);
                bw.newLine();
            }

            System.out.println("Proceso completado. Las líneas sin vocales se han guardado en " + nombreArchivoSalida);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String quitarVocales(String input) {
        // Utilizamos una expresión regular para quitar las vocales (mayúsculas y
        // minúsculas) de la línea
        return input.replaceAll("[aeiouAEIOU]", "");
    }
}
