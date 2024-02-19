import java.io.*;
import java.util.*;

public class OperacionesArchivo {

    public static void llenarArchivo(String nombreArchivo) throws IOException {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(nombreArchivo))) {
            Random random = new Random();
            int cantidadNumeros = random.nextInt(10) + 1; // Números aleatorios entre 1 y 10

            for (int i = 0; i < cantidadNumeros; i++) {
                bw.write(String.valueOf(random.nextInt(100))); // Números aleatorios entre 0 y 99
                bw.newLine();
            }
        }
    }

    public static void buscarMayor() {
        int mayor = Integer.MIN_VALUE;

        for (int i = 1; i <= 11; i++) {
            try (BufferedReader br = new BufferedReader(new FileReader(i + ".txt"))) {
                String linea;
                while ((linea = br.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    mayor = Math.max(mayor, numero);
                }
            } catch (IOException | NumberFormatException e) {
                e.printStackTrace();
            }
        }

        System.out.println("El número mayor es: " + mayor);
    }

    public static void buscarMenor() {
        int menor = Integer.MAX_VALUE;

        for (int i = 1; i <= 11; i++) {
            try (BufferedReader br = new BufferedReader(new FileReader(i + ".txt"))) {
                String linea;
                while ((linea = br.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    menor = Math.min(menor, numero);
                }
            } catch (IOException | NumberFormatException e) {
                e.printStackTrace();
            }
        }

        System.out.println("El número menor es: " + menor);
    }

    public static void buscarMedia() {
        int suma = 0;
        int cantidadNumeros = 0;

        for (int i = 1; i <= 11; i++) {
            try (BufferedReader br = new BufferedReader(new FileReader(i + ".txt"))) {
                String linea;
                while ((linea = br.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    suma += numero;
                    cantidadNumeros++;
                }
            } catch (IOException | NumberFormatException e) {
                e.printStackTrace();
            }
        }

        double media = (double) suma / cantidadNumeros;
        System.out.println("La media es: " + media);
    }

    public static void buscarSuma() {
        int suma = 0;

        for (int i = 1; i <= 11; i++) {
            try (BufferedReader br = new BufferedReader(new FileReader(i + ".txt"))) {
                String linea;
                while ((linea = br.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    suma += numero;
                }
            } catch (IOException | NumberFormatException e) {
                e.printStackTrace();
            }
        }

        System.out.println("La suma de todos los números es: " + suma);
    }

    public static void buscarNumeroConcreto() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese el número que desea buscar: ");
        int numeroBuscado = scanner.nextInt();

        boolean encontrado = false;

        for (int i = 1; i <= 11; i++) {
            try (BufferedReader br = new BufferedReader(new FileReader(i + ".txt"))) {
                String linea;
                int numeroLinea = 1;
                while ((linea = br.readLine()) != null) {
                    int numero = Integer.parseInt(linea);
                    if (numero == numeroBuscado) {
                        System.out.println("El número " + numeroBuscado + " se encuentra en el archivo " + i + ".txt, línea " + numeroLinea);
                        encontrado = true;
                    }
                    numeroLinea++;
                }
            } catch (IOException | NumberFormatException e) {
                e.printStackTrace();
            }
        }

        if (!encontrado) {
            System.out.println("El número " + numeroBuscado + " no se encuentra en ningún archivo.");
        }
    }
}
