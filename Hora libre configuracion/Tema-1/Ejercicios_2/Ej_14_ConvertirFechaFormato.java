package Ejercicios_2;

import java.util.Scanner;

public class Ej_14_ConvertirFechaFormato {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce una fecha en formato DD/MM/AAAA: ");
        String fechaTexto = scanner.nextLine();

        String[] partesFecha = fechaTexto.split("/");
        if (partesFecha.length == 3) {
            try {
                int dia = Integer.parseInt(partesFecha[0]);
                int mes = Integer.parseInt(partesFecha[1]);
                int año = Integer.parseInt(partesFecha[2]);

                if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && año >= 1000 && año <= 9999) {
                    String mesTexto = obtenerMesTexto(mes);
                    System.out.println(dia + " de " + mesTexto + " de " + año);
                } else {
                    System.out.println("Fecha no válida.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Fecha no válida.");
            }
        } else {
            System.out.println("Formato de fecha incorrecto.");
        }
    }

    public static String obtenerMesTexto(int mes) {
        String[] meses = {
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        };

        if (mes >= 1 && mes <= 12) {
            return meses[mes - 1];
        } else {
            return "mes desconocido";
        }
    }
}
