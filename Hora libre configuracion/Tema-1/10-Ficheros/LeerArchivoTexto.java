import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;     

public class LeerArchivoTexto {
    public static void main(String[] args) {
        String nombreArchivo = "./ejemploArchivo.txt";
        try (BufferedReader br = new BufferedReader(new FileReader(nombreArchivo))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
